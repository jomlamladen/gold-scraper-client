/**
 * API Adapter - Transformiše backend response u frontend format
 * 
 * Koristi se dok backend ne implementira finalni format direktno.
 */

import { 
  ProductListResponse, 
  ProductListItem,
  PriceRange,
  PriceData 
} from '@/types/api-types';

// ============================================
// BACKEND TYPES (kako je trenutno)
// ============================================

interface BackendCurrentPrice {
  availability: string;
  currency: string;
  price: number;
  priceValue: number;
  scrapedAt: string;
  source: string;
  sourceUrl: string;
}

interface BackendProduct {
  id: string;
  name: string;
  normalizedName: string;
  weight: string;
  weightValue: number;
  weightUnit: string;
  purity: string;
  category: string;
  manufacturer: string;
  image: string;
  link: string;
  currentPrices: BackendCurrentPrice[];
}

interface BackendResponse {
  success: boolean;
  count: number;
  data: BackendProduct[];
  filters: Record<string, any>;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Formatira timestamp u relativno vreme ("Pre 2h")
 */
function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "Upravo";
  if (diffMins < 60) return `Pre ${diffMins}min`;
  if (diffHours < 24) return `Pre ${diffHours}h`;
  if (diffDays < 7) return `Pre ${diffDays} dana`;
  return date.toLocaleDateString('sr-RS');
}

/**
 * Mapira backend kategoriju u frontend kategoriju
 */
function mapCategory(backendCategory: string): string {
  const categoryMap: Record<string, string> = {
    'Gold Products': 'gold_bars',
    'Gold Coins': 'gold_coins',
    'Small Gold Bars': 'gold_bars',
    'Medium Gold Bars': 'gold_bars',
    'Large Gold Bars': 'gold_bars',
    'Silver Products': 'silver_bars',
    'Silver Coins': 'silver_coins',
  };

  return categoryMap[backendCategory] || 'gold_bars';
}

/**
 * Mapira backend shop name u friendlier ime
 */
function mapShopName(source: string): string {
  const shopMap: Record<string, string> = {
    'dunavgold': 'DunavGold.rs',
    'goldroyal': 'GoldRoyal.rs',
    'gvssrbija': 'GVSSrbija.rs',
    'investicionozlato-rs': 'InvesticionoZlato.rs',
    'goldenspace': 'GoldenSpace.rs',
  };

  return shopMap[source] || source;
}

/**
 * Računa pricePerGram
 */
function calculatePricePerGram(price: number, weightValue: number): number {
  if (!weightValue || weightValue === 0) return 0;
  return Math.round((price / weightValue) * 100) / 100;
}

/**
 * Kreira PriceRange objekat iz currentPrices
 */
function calculatePriceRange(prices: BackendCurrentPrice[]): PriceRange {
  if (!prices || prices.length === 0) {
    return {
      lowest: 0,
      highest: 0,
      average: 0,
      difference: 0,
      lowestShop: '',
      highestShop: ''
    };
  }

  const sortedPrices = [...prices].sort((a, b) => a.priceValue - b.priceValue);
  const lowest = sortedPrices[0];
  const highest = sortedPrices[sortedPrices.length - 1];
  const average = Math.round(
    prices.reduce((sum, p) => sum + p.priceValue, 0) / prices.length
  );

  return {
    lowest: lowest.priceValue,
    highest: highest.priceValue,
    average,
    difference: highest.priceValue - lowest.priceValue,
    lowestShop: mapShopName(lowest.source),
    highestShop: mapShopName(highest.source)
  };
}

/**
 * Generiše description na osnovu proizvoda
 */
function generateDescription(product: BackendProduct): string {
  const categoryDesc = product.category === 'Gold Coins' 
    ? 'Zlatnik' 
    : 'Zlatna poluga';
  
  const manufacturerPart = product.manufacturer !== 'Unknown' 
    ? ` - ${product.manufacturer}` 
    : '';

  return `${categoryDesc} ${product.weight}, čistoća ${product.purity}${manufacturerPart}`;
}

/**
 * Određuje availability (agregat svih shop-ova)
 */
function determineAvailability(prices: BackendCurrentPrice[]): "in_stock" | "limited_stock" | "out_of_stock" {
  if (prices.length === 0) return "out_of_stock";
  
  const inStockCount = prices.filter(p => p.availability === "in_stock").length;
  const percentage = inStockCount / prices.length;

  if (percentage >= 0.7) return "in_stock";
  if (percentage > 0) return "limited_stock";
  return "out_of_stock";
}

// ============================================
// MAIN ADAPTER FUNCTION
// ============================================

/**
 * Transformiše backend response u frontend ProductListResponse format
 */
export function adaptProductListResponse(
  backendResponse: BackendResponse,
  page: number = 1,
  limit: number = 20
): ProductListResponse {
  
  // Transform products
  const products: ProductListItem[] = backendResponse.data.map(product => {
    const priceRange = calculatePriceRange(product.currentPrices);
    
    return {
      id: parseInt(product.id.slice(-4), 16), // Koristi poslednja 4 karaktera hex ID-a kao int
      name: product.name,
      weight: product.weight,
      purity: product.purity,
      image: product.image, // TODO: Backend treba da vrati real image
      description: generateDescription(product),
      category: mapCategory(product.category) as any,
      priceRange,
      availability: determineAvailability(product.currentPrices),
      shopCount: product.currentPrices.length,
      lastUpdated: product.currentPrices[0]?.scrapedAt || new Date().toISOString(),
      trending: undefined // TODO: Backend treba da računa trending
    };
  });

  // Calculate pagination
  const totalItems = backendResponse.count;
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = page;

  return {
    success: true,
    data: {
      products,
      pagination: {
        currentPage,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1
      },
      filters: {
        appliedCategory: 'all',
        appliedSortBy: 'updated_desc',
        availableCategories: [
          { value: 'all', label: 'Svi proizvodi', count: totalItems },
          // TODO: Backend treba da vrati ove brojeve per kategoriju
          { value: 'gold_bars', label: 'Zlatne poluge', count: 0 },
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
 * Transformiše backend currentPrices u frontend PriceData format
 * (koristi se za single product page)
 */
export function adaptPriceData(
  backendPrices: BackendCurrentPrice[],
  weightValue: number
): PriceData[] {
  return backendPrices.map(price => ({
    shop: mapShopName(price.source),
    shopUrl: price.sourceUrl,
    price: price.priceValue,
    pricePerGram: calculatePricePerGram(price.priceValue, weightValue),
    updatedAt: formatRelativeTime(price.scrapedAt),
    availability: price.availability as any,
    shippingInfo: undefined, // TODO: Backend treba da vrati ovo
    rating: undefined // TODO: Backend treba da vrati ovo
  }));
}

// ============================================
// EXAMPLE USAGE
// ============================================

/*
// U komponenti:
import { adaptProductListResponse } from '@/utils/api-adapter';

async function fetchProducts(page = 1) {
  const response = await fetch(`/api/products?page=${page}`);
  const backendData = await response.json();
  
  // Transform u frontend format
  const frontendData = adaptProductListResponse(backendData, page);
  
  return frontendData;
}
*/

