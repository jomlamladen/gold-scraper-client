/**
 * API Service Layer
 * 
 * Automatski switchuje između mock i real API podataka na osnovu USE_MOCK_DATA flag-a.
 * Sve komponente koriste ovaj servis za data fetching.
 */

import { USE_MOCK_DATA, API_ENDPOINTS } from './api-config';
import { products as mockProducts, getDefaultImageByWeight } from './products-data';
import type { 
  ProductListResponse, 
  ProductDetailResponse,
  ProductListQuery 
} from '@/types/api-types';

// ============================================
// MOCK DATA GENERATORS
// ============================================

/**
 * Generiše mock response za products list
 */
function getMockProductsList(query?: ProductListQuery): ProductListResponse {
  const page = query?.page || 1;
  const limit = query?.limit || 20;
  const category = query?.category || 'all';
  const sortBy = query?.sortBy || 'updated_desc';

  // Filter by category
  let filteredProducts = mockProducts;
  if (category !== 'all') {
    filteredProducts = mockProducts.filter(p => {
      // Mock products nemaju category field, ali možemo da generišemo
      return true; // za sada vrati sve
    });
  }

  // Pagination
  const startIdx = (page - 1) * limit;
  const endIdx = startIdx + limit;
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  // Transform mock products to API format
  const products = paginatedProducts.map((product, idx) => {
    // Generate mock trending data
    const trendDirections: Array<'up' | 'down' | 'stable'> = ['up', 'down', 'stable'];
    const randomDirection = trendDirections[Math.floor(Math.random() * trendDirections.length)];
    const randomChange = randomDirection === 'stable' 
      ? (Math.random() * 0.5 - 0.25) // -0.25% to +0.25%
      : randomDirection === 'up'
        ? (Math.random() * 5) // 0% to 5%
        : -(Math.random() * 5); // -5% to 0%
    
    return {
      id: product.id,
      name: product.name,
      weight: product.weight,
      purity: product.purity,
      image: product.image,
      description: product.description,
      category: 'gold_bars' as const,
      priceRange: {
        lowest: Math.min(...product.priceData.map(p => p.price)),
        highest: Math.max(...product.priceData.map(p => p.price)),
        average: Math.floor(product.priceData.reduce((sum, p) => sum + p.price, 0) / product.priceData.length),
        difference: Math.max(...product.priceData.map(p => p.price)) - Math.min(...product.priceData.map(p => p.price)),
        lowestShop: product.priceData.sort((a, b) => a.price - b.price)[0].shop,
        highestShop: product.priceData.sort((a, b) => b.price - a.price)[0].shop,
      },
      availability: 'in_stock' as const,
      shopCount: product.priceData.length,
      lastUpdated: new Date().toISOString(),
      trending: {
        direction: randomDirection,
        percentChange: parseFloat(randomChange.toFixed(2)),
        period: '24h' as const
      }
    };
  });

  return {
    success: true,
    data: {
      products,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredProducts.length / limit),
        totalItems: filteredProducts.length,
        itemsPerPage: limit,
        hasNextPage: endIdx < filteredProducts.length,
        hasPreviousPage: page > 1
      },
      filters: {
        appliedCategory: category,
        appliedSortBy: sortBy,
        availableCategories: [
          { value: 'all', label: 'Svi proizvodi', count: filteredProducts.length },
          { value: 'gold_bars', label: 'Zlatne poluge', count: filteredProducts.length },
          { value: 'gold_coins', label: 'Zlatnici', count: 0 },
          { value: 'silver_bars', label: 'Srebrne poluge', count: 0 },
          { value: 'silver_coins', label: 'Srebrnjaci', count: 0 }
        ]
      },
      metadata: {
        lastScrapeTime: new Date().toISOString(),
        nextUpdateIn: '30 minutes',
        totalShops: 5
      }
    }
  };
}

/**
 * Generiše mock response za single product
 */
function getMockProductDetail(id: string): ProductDetailResponse {
  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  // Calculate analytics
  const sortedPrices = [...product.priceData].sort((a, b) => a.price - b.price);
  const lowestPrice = sortedPrices[0];
  const highestPrice = sortedPrices[sortedPrices.length - 1];
  const averagePrice = Math.floor(
    product.priceData.reduce((sum, p) => sum + p.price, 0) / product.priceData.length
  );

  return {
    success: true,
    data: {
      id: product.id,
      name: product.name,
      weight: product.weight,
      purity: product.purity,
      image: product.image,
      description: product.description,
      category: 'gold_bars',
      lastUpdated: new Date().toISOString(),
      priceData: product.priceData.map(p => ({
        shop: p.shop,
        shopUrl: 'https://example.com',
        price: p.price,
        pricePerGram: p.pricePerGram || 0,
        updatedAt: p.updatedAt,
        availability: 'in_stock' as const,
        shippingInfo: undefined,
        rating: undefined
      })),
      historicalData: {
        period: '12_months' as const,
        dataPoints: [] // Mock historical data - može se dodati kasnije
      },
      shopHistoricalData: [],
      heatmapData: [],
      priceAnalytics: {
        currentLowest: {
          shop: lowestPrice.shop,
          price: lowestPrice.price,
          pricePerGram: lowestPrice.pricePerGram || 0,
          updatedAt: lowestPrice.updatedAt
        },
        currentHighest: {
          shop: highestPrice.shop,
          price: highestPrice.price,
          pricePerGram: highestPrice.pricePerGram || 0,
          updatedAt: highestPrice.updatedAt
        },
        currentAverage: averagePrice,
        priceDifference: highestPrice.price - lowestPrice.price,
        priceVariancePercent: parseFloat(
          (((highestPrice.price - lowestPrice.price) / lowestPrice.price) * 100).toFixed(2)
        ),
        recommendedShop: lowestPrice.shop,
        savingsVsAverage: averagePrice - lowestPrice.price,
        savingsVsHighest: highestPrice.price - lowestPrice.price
      },
      metadata: {
        totalShops: product.priceData.length,
        lastScrapeTime: new Date().toISOString(),
        nextUpdateIn: '30 minutes',
        dataQuality: 'excellent' as const,
        scrapingStatus: 'active' as const
      }
    }
  };
}

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Fetch products list
 * Automatski koristi mock ili real API na osnovu USE_MOCK_DATA flag-a
 */
export async function fetchProducts(query?: ProductListQuery): Promise<ProductListResponse> {
  console.log('[API Service] Fetching products...', query);

  if (USE_MOCK_DATA) {
    console.log('[API Service] Using MOCK data');
    // Simuliraj delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return getMockProductsList(query);
  }

  console.log('[API Service] Using REAL API');
  
  // Build query string
  const params = new URLSearchParams();
  if (query?.category) params.append('category', query.category);
  if (query?.sortBy) params.append('sortBy', query.sortBy);
  if (query?.page) params.append('page', query.page.toString());
  if (query?.limit) params.append('limit', query.limit.toString());

  const url = `${API_ENDPOINTS.products}${params.toString() ? '?' + params.toString() : ''}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Validate response
    if (!data.success) {
      throw new Error(data.error?.message || 'API returned success: false');
    }

    // Replace API images with default mock images based on weight
    if (data.data && data.data.products) {
      data.data.products = data.data.products.map((product: any) => ({
        ...product,
        image: getDefaultImageByWeight(product.weight)
      }));
    }

    return data as ProductListResponse;
  } catch (error) {
    console.error('[API Service] Error fetching products:', error);
    console.warn('[API Service] Falling back to MOCK data...');
    
    // Fallback to mock data if API fails
    await new Promise(resolve => setTimeout(resolve, 100));
    return getMockProductsList(query);
  }
}

/**
 * Fetch single product detail
 * Automatski koristi mock ili real API na osnovu USE_MOCK_DATA flag-a
 */
export async function fetchProductDetail(id: string): Promise<ProductDetailResponse> {
  console.log('[API Service] Fetching product detail...', id);

  if (USE_MOCK_DATA) {
    console.log('[API Service] Using MOCK data');
    // Simuliraj delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return getMockProductDetail(id);
  }

  console.log('[API Service] Using REAL API');

  const url = API_ENDPOINTS.productDetail(id);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Product not found');
      }
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Validate response
    if (!data.success) {
      throw new Error(data.error?.message || 'API returned success: false');
    }

    // Replace API image with default mock image based on weight
    if (data.data && data.data.weight) {
      data.data.image = getDefaultImageByWeight(data.data.weight);
    }

    return data as ProductDetailResponse;
  } catch (error) {
    console.error('[API Service] Error fetching product detail:', error);
    console.warn('[API Service] Falling back to MOCK data...');
    
    // Fallback to mock data if API fails
    await new Promise(resolve => setTimeout(resolve, 100));
    return getMockProductDetail(id);
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Check if API is available
 */
export async function checkApiHealth(): Promise<boolean> {
  if (USE_MOCK_DATA) {
    return true; // Mock data is always available
  }

  try {
    const response = await fetch(`${API_ENDPOINTS.products}?limit=1`, {
      method: 'HEAD',
    });
    return response.ok;
  } catch (error) {
    console.error('[API Service] Health check failed:', error);
    return false;
  }
}

/**
 * Get current API mode
 */
export function getApiMode(): 'mock' | 'real' {
  return USE_MOCK_DATA ? 'mock' : 'real';
}

