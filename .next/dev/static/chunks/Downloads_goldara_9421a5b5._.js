(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/goldara/lib/api-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Configuration
 * 
 * Kontroliše da li aplikacija koristi mock podatke ili real backend API.
 * Promeni USE_MOCK_DATA flag da switchuješ između mock i real data.
 */ // 🔧 TOGGLE OVDE - Promeni na false za real API
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "USE_MOCK_DATA",
    ()=>USE_MOCK_DATA,
    "apiConfig",
    ()=>apiConfig,
    "getApiMode",
    ()=>getApiMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/goldara/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const USE_MOCK_DATA = true;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_ENDPOINTS = {
    products: `${API_BASE_URL}/api/products`,
    productDetail: (id)=>`${API_BASE_URL}/api/products/${id}`
};
const apiConfig = {
    useMockData: USE_MOCK_DATA,
    baseUrl: API_BASE_URL,
    timeout: 10000,
    retries: 3
};
const getApiMode = ()=>{
    return ("TURBOPACK compile-time truthy", 1) ? '🔵 MOCK MODE' : "TURBOPACK unreachable";
};
// Log current mode
if ("TURBOPACK compile-time truthy", 1) {
    console.log(`[API Config] ${getApiMode()}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/goldara/lib/products-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultProductImages",
    ()=>defaultProductImages,
    "getDefaultImageByWeight",
    ()=>getDefaultImageByWeight,
    "getLastUpdateTime",
    ()=>getLastUpdateTime,
    "products",
    ()=>products
]);
const products = [
    {
        id: "1",
        name: "Poluga 1g Čistog Zlata",
        weight: "1g",
        purity: "99.9%",
        image: "/gold-bar-1g-luxury-premium.jpg",
        description: "Idealna poluga za početnike u investiciji zlata",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 2850,
                updatedAt: "5m",
                pricePerGram: 2850
            },
            {
                shop: "MetalStore.com",
                price: 2870,
                updatedAt: "12m",
                pricePerGram: 2870
            },
            {
                shop: "Аурум.rs",
                price: 2890,
                updatedAt: "2h",
                pricePerGram: 2890
            },
            {
                shop: "PreciousMetal.co",
                price: 2920,
                updatedAt: "15m",
                pricePerGram: 2920
            },
            {
                shop: "GoldHub.net",
                price: 2880,
                updatedAt: "8m",
                pricePerGram: 2880
            }
        ]
    },
    {
        id: "2",
        name: "Poluga 5g Čistog Zlata",
        weight: "5g",
        purity: "99.9%",
        image: "/gold-bar-5g-precious-metal.jpg",
        description: "Popularna veličina za ozbiljne investitore",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 14200,
                updatedAt: "3m",
                pricePerGram: 2840
            },
            {
                shop: "MetalStore.com",
                price: 14350,
                updatedAt: "8m",
                pricePerGram: 2870
            },
            {
                shop: "Аурум.rs",
                price: 14450,
                updatedAt: "1h",
                pricePerGram: 2890
            },
            {
                shop: "PreciousMetal.co",
                price: 14600,
                updatedAt: "18m",
                pricePerGram: 2920
            },
            {
                shop: "GoldHub.net",
                price: 14400,
                updatedAt: "5m",
                pricePerGram: 2880
            }
        ]
    },
    {
        id: "3",
        name: "Poluga 10g Čistog Zlata",
        weight: "10g",
        purity: "99.9%",
        image: "/gold-bar-10g-bullion-ingot.jpg",
        description: "Savršena za dugoročne investicije",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 28300,
                updatedAt: "2m",
                pricePerGram: 2830
            },
            {
                shop: "MetalStore.com",
                price: 28600,
                updatedAt: "6m",
                pricePerGram: 2860
            },
            {
                shop: "Аурум.rs",
                price: 28900,
                updatedAt: "45m",
                pricePerGram: 2890
            },
            {
                shop: "PreciousMetal.co",
                price: 29100,
                updatedAt: "20m",
                pricePerGram: 2910
            },
            {
                shop: "GoldHub.net",
                price: 28750,
                updatedAt: "4m",
                pricePerGram: 2875
            }
        ]
    },
    {
        id: "4",
        name: "Poluga 20g Čistog Zlata",
        weight: "20g",
        purity: "99.9%",
        image: "/gold-bar-20g-precious-metal.jpg",
        description: "Premium investicija za iskusne investitore",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 56500,
                updatedAt: "1m",
                pricePerGram: 2825
            },
            {
                shop: "MetalStore.com",
                price: 56900,
                updatedAt: "4m",
                pricePerGram: 2845
            },
            {
                shop: "Аурум.rs",
                price: 57300,
                updatedAt: "30m",
                pricePerGram: 2865
            },
            {
                shop: "PreciousMetal.co",
                price: 57800,
                updatedAt: "22m",
                pricePerGram: 2890
            },
            {
                shop: "GoldHub.net",
                price: 57100,
                updatedAt: "3m",
                pricePerGram: 2855
            }
        ]
    },
    {
        id: "5",
        name: "Poluga 50g Čistog Zlata",
        weight: "50g",
        purity: "99.9%",
        image: "/gold-bar-50g-premium-bullion.jpg",
        description: "Investicija po znanju za uspešne investitore",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 141200,
                updatedAt: "4m",
                pricePerGram: 2824
            },
            {
                shop: "MetalStore.com",
                price: 142300,
                updatedAt: "10m",
                pricePerGram: 2846
            },
            {
                shop: "Аурум.rs",
                price: 143400,
                updatedAt: "1h30m",
                pricePerGram: 2868
            },
            {
                shop: "PreciousMetal.co",
                price: 144500,
                updatedAt: "25m",
                pricePerGram: 2890
            },
            {
                shop: "GoldHub.net",
                price: 142800,
                updatedAt: "6m",
                pricePerGram: 2856
            }
        ]
    },
    {
        id: "6",
        name: "Poluga 100g Čistog Zlata",
        weight: "100g",
        purity: "99.9%",
        image: "/gold-bar-100g-luxury-ingot.jpg",
        description: "Vrhunska investicija za institucionalne investitore",
        priceData: [
            {
                shop: "GoldShop.rs",
                price: 282300,
                updatedAt: "3m",
                pricePerGram: 2823
            },
            {
                shop: "MetalStore.com",
                price: 283600,
                updatedAt: "9m",
                pricePerGram: 2836
            },
            {
                shop: "Аурум.rs",
                price: 284900,
                updatedAt: "55m",
                pricePerGram: 2849
            },
            {
                shop: "PreciousMetal.co",
                price: 286200,
                updatedAt: "28m",
                pricePerGram: 2862
            },
            {
                shop: "GoldHub.net",
                price: 285000,
                updatedAt: "7m",
                pricePerGram: 2850
            }
        ]
    }
];
const defaultProductImages = {
    // Poluge
    "1g": "/gold-bar-1g-luxury-premium.jpg",
    "1.0 g": "/gold-bar-1g-luxury-premium.jpg",
    "2g": "/gold-bar-1g-luxury-premium.jpg",
    "2.0 g": "/gold-bar-1g-luxury-premium.jpg",
    "5g": "/gold-bar-5g-precious-metal.jpg",
    "5.0 g": "/gold-bar-5g-precious-metal.jpg",
    "10g": "/gold-bar-10g-bullion-ingot.jpg",
    "10.0 g": "/gold-bar-10g-bullion-ingot.jpg",
    "20g": "/gold-bar-20g-precious-metal.jpg",
    "20.0 g": "/gold-bar-20g-precious-metal.jpg",
    "50g": "/gold-bar-50g-premium-bullion.jpg",
    "50.0 g": "/gold-bar-50g-premium-bullion.jpg",
    "100g": "/gold-bar-100g-luxury-ingot.jpg",
    "100.0 g": "/gold-bar-100g-luxury-ingot.jpg",
    // Zlatnici (coins)
    "3.4 g": "/gold-coins-investment-wealth-precious-metals.jpg",
    "13.8 g": "/gold-coins-investment-wealth-precious-metals.jpg",
    "31.1g": "/gold-coins-investment-wealth-precious-metals.jpg",
    "31.1 g": "/gold-coins-investment-wealth-precious-metals.jpg"
};
const getDefaultImageByWeight = (weight)=>{
    // Normalize weight (remove spaces, convert to lowercase)
    const normalizedWeight = weight.toLowerCase().trim();
    return defaultProductImages[normalizedWeight] || "/placeholder.jpg";
};
const getLastUpdateTime = ()=>{
    const now = new Date();
    return now.toLocaleString("sr-RS", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/goldara/lib/api-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Service Layer
 * 
 * Automatski switchuje između mock i real API podataka na osnovu USE_MOCK_DATA flag-a.
 * Sve komponente koriste ovaj servis za data fetching.
 */ __turbopack_context__.s([
    "checkApiHealth",
    ()=>checkApiHealth,
    "fetchProductDetail",
    ()=>fetchProductDetail,
    "fetchProducts",
    ()=>fetchProducts,
    "getApiMode",
    ()=>getApiMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/lib/api-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/lib/products-data.ts [app-client] (ecmascript)");
;
;
// ============================================
// MOCK DATA GENERATORS
// ============================================
/**
 * Generiše mock response za products list
 */ function getMockProductsList(query) {
    const page = query?.page || 1;
    const limit = query?.limit || 20;
    const category = query?.category || 'all';
    const sortBy = query?.sortBy || 'updated_desc';
    // Filter by category
    let filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"];
    if (category !== 'all') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>{
            // Mock products nemaju category field, ali možemo da generišemo
            return true; // za sada vrati sve
        });
    }
    // Pagination
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    const paginatedProducts = filteredProducts.slice(startIdx, endIdx);
    // Transform mock products to API format
    const products = paginatedProducts.map((product, idx)=>{
        // Generate mock trending data
        const trendDirections = [
            'up',
            'down',
            'stable'
        ];
        const randomDirection = trendDirections[Math.floor(Math.random() * trendDirections.length)];
        const randomChange = randomDirection === 'stable' ? Math.random() * 0.5 - 0.25 : randomDirection === 'up' ? Math.random() * 5 : -(Math.random() * 5); // -5% to 0%
        return {
            id: product.id,
            name: product.name,
            weight: product.weight,
            purity: product.purity,
            image: product.image,
            description: product.description,
            category: 'gold_bars',
            priceRange: {
                lowest: Math.min(...product.priceData.map((p)=>p.price)),
                highest: Math.max(...product.priceData.map((p)=>p.price)),
                average: Math.floor(product.priceData.reduce((sum, p)=>sum + p.price, 0) / product.priceData.length),
                difference: Math.max(...product.priceData.map((p)=>p.price)) - Math.min(...product.priceData.map((p)=>p.price)),
                lowestShop: product.priceData.sort((a, b)=>a.price - b.price)[0].shop,
                highestShop: product.priceData.sort((a, b)=>b.price - a.price)[0].shop
            },
            availability: 'in_stock',
            shopCount: product.priceData.length,
            lastUpdated: new Date().toISOString(),
            trending: {
                direction: randomDirection,
                percentChange: parseFloat(randomChange.toFixed(2)),
                period: '24h'
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
                    {
                        value: 'all',
                        label: 'Svi proizvodi',
                        count: filteredProducts.length
                    },
                    {
                        value: 'gold_bars',
                        label: 'Zlatne poluge',
                        count: filteredProducts.length
                    },
                    {
                        value: 'gold_coins',
                        label: 'Zlatnici',
                        count: 0
                    },
                    {
                        value: 'silver_bars',
                        label: 'Srebrne poluge',
                        count: 0
                    },
                    {
                        value: 'silver_coins',
                        label: 'Srebrnjaci',
                        count: 0
                    }
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
 */ function getMockProductDetail(id) {
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    // Calculate analytics
    const sortedPrices = [
        ...product.priceData
    ].sort((a, b)=>a.price - b.price);
    const lowestPrice = sortedPrices[0];
    const highestPrice = sortedPrices[sortedPrices.length - 1];
    const averagePrice = Math.floor(product.priceData.reduce((sum, p)=>sum + p.price, 0) / product.priceData.length);
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
            priceData: product.priceData.map((p)=>({
                    shop: p.shop,
                    shopUrl: 'https://example.com',
                    price: p.price,
                    pricePerGram: p.pricePerGram || 0,
                    updatedAt: p.updatedAt,
                    availability: 'in_stock',
                    shippingInfo: undefined,
                    rating: undefined
                })),
            historicalData: {
                period: '12_months',
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
                priceVariancePercent: parseFloat(((highestPrice.price - lowestPrice.price) / lowestPrice.price * 100).toFixed(2)),
                recommendedShop: lowestPrice.shop,
                savingsVsAverage: averagePrice - lowestPrice.price,
                savingsVsHighest: highestPrice.price - lowestPrice.price
            },
            metadata: {
                totalShops: product.priceData.length,
                lastScrapeTime: new Date().toISOString(),
                nextUpdateIn: '30 minutes',
                dataQuality: 'excellent',
                scrapingStatus: 'active'
            }
        }
    };
}
async function fetchProducts(query) {
    console.log('[API Service] Fetching products...', query);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_MOCK_DATA"]) {
        console.log('[API Service] Using MOCK data');
        // Simuliraj delay
        await new Promise((resolve)=>setTimeout(resolve, 300));
        return getMockProductsList(query);
    }
    console.log('[API Service] Using REAL API');
    // Build query string
    const params = new URLSearchParams();
    if (query?.category) params.append('category', query.category);
    if (query?.sortBy) params.append('sortBy', query.sortBy);
    if (query?.page) params.append('page', query.page.toString());
    if (query?.limit) params.append('limit', query.limit.toString());
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].products}${params.toString() ? '?' + params.toString() : ''}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
            data.data.products = data.data.products.map((product)=>({
                    ...product,
                    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultImageByWeight"])(product.weight)
                }));
        }
        return data;
    } catch (error) {
        console.error('[API Service] Error fetching products:', error);
        console.warn('[API Service] Falling back to MOCK data...');
        // Fallback to mock data if API fails
        await new Promise((resolve)=>setTimeout(resolve, 100));
        return getMockProductsList(query);
    }
}
async function fetchProductDetail(id) {
    console.log('[API Service] Fetching product detail...', id);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_MOCK_DATA"]) {
        console.log('[API Service] Using MOCK data');
        // Simuliraj delay
        await new Promise((resolve)=>setTimeout(resolve, 300));
        return getMockProductDetail(id);
    }
    console.log('[API Service] Using REAL API');
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].productDetail(id);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
            data.data.image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultImageByWeight"])(data.data.weight);
        }
        return data;
    } catch (error) {
        console.error('[API Service] Error fetching product detail:', error);
        console.warn('[API Service] Falling back to MOCK data...');
        // Fallback to mock data if API fails
        await new Promise((resolve)=>setTimeout(resolve, 100));
        return getMockProductDetail(id);
    }
}
async function checkApiHealth() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_MOCK_DATA"]) {
        return true; // Mock data is always available
    }
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].products}?limit=1`, {
            method: 'HEAD'
        });
        return response.ok;
    } catch (error) {
        console.error('[API Service] Health check failed:', error);
        return false;
    }
}
function getApiMode() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_MOCK_DATA"] ? 'mock' : 'real';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/goldara/app/products/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/goldara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Generate historical data for price trends
const generateHistoricalData = (shops, basePrice)=>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
    ];
    return months.map((month, idx)=>{
        const dataPoint = {
            month
        };
        shops.forEach((shop)=>{
            const variance = Math.random() * 200 - 100;
            dataPoint[shop] = Math.floor(basePrice + idx * 15 + variance);
        });
        return dataPoint;
    });
};
// Generate heatmap data (365 days)
const generateHeatmapData = (shops, basePrice)=>{
    const data = [];
    const today = new Date();
    // Generate data for each day of the year
    for(let i = 364; i >= 0; i--){
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
        ;
        const weekNumber = Math.floor((364 - i) / 7);
        shops.forEach((shop)=>{
            const variance = (Math.random() - 0.5) * 300;
            const seasonalVariance = Math.sin(i / 30) * 100;
            const price = Math.floor(basePrice + variance + seasonalVariance);
            // Calculate intensity based on price variation
            const priceChange = Math.abs(price - basePrice);
            const intensity = Math.min(Math.floor(priceChange / 300 * 4) + 1, 4);
            data.push({
                date: date.toISOString().split('T')[0],
                day: dayOfWeek,
                week: weekNumber,
                shop,
                price,
                intensity
            });
        });
    }
    return data;
};
// Generate price distribution data
const generatePriceDistribution = (priceData)=>{
    return priceData.map((data)=>({
            shop: data.shop,
            price: data.price,
            pricePerGram: data.pricePerGram || 0
        }));
};
// Generate 3-month history for a single shop with daily data
const generateShopHistory = (shopName, currentPrice)=>{
    const dataPoints = [];
    const today = new Date();
    const daysToShow = 90 // 3 months
    ;
    const pointsToShow = 30 // Show every 3rd day for cleaner chart
    ;
    for(let i = pointsToShow - 1; i >= 0; i--){
        const date = new Date(today);
        const daysBack = i * 3 // Every 3 days
        ;
        date.setDate(date.getDate() - daysBack);
        const dateLabel = date.toLocaleDateString("sr-RS", {
            day: "numeric",
            month: "short"
        });
        // Create realistic price variations
        const baseVariance = (Math.random() - 0.5) * 80 // Random daily fluctuation
        ;
        const trendComponent = (pointsToShow - i) * 3 // Slight upward trend
        ;
        const seasonalVariance = Math.sin(i / 5) * 40 // Seasonal wave pattern
        ;
        const price = Math.floor(currentPrice - trendComponent + baseVariance + seasonalVariance);
        dataPoints.push({
            date: dateLabel,
            price: price,
            high: price + Math.floor(Math.random() * 30),
            low: price - Math.floor(Math.random() * 30)
        });
    }
    return dataPoints;
};
// Shop colors for charts
const shopColors = {
    "GoldShop.rs": "#FFA500",
    "MetalStore.com": "#D4AF37",
    "Аурум.rs": "#FFD700",
    "PreciousMetal.co": "#DAA520",
    "GoldHub.net": "#CD7F32"
};
function ProductDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const productId = params.id;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeChart, setActiveChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("history");
    const [expandedShop, setExpandedShop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shopView, setShopView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [hoveredCell, setHoveredCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch product data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            async function loadProduct() {
                try {
                    setLoading(true);
                    setError(null);
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductDetail"])(productId);
                    setProduct(response.data);
                } catch (err) {
                    console.error('Failed to load product:', err);
                    setError('Failed to load product details. Please try again later.');
                } finally{
                    setLoading(false);
                }
            }
            if (productId) {
                loadProduct();
            }
        }
    }["ProductDetailPage.useEffect"], [
        productId
    ]);
    // Memoize heatmap handlers to prevent rerenders
    const handleCellMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductDetailPage.useCallback[handleCellMouseEnter]": (e, shopName, date, price)=>{
            const rect = e.currentTarget.getBoundingClientRect();
            setHoveredCell({
                shop: shopName,
                date: date,
                price: price,
                x: rect.left + rect.width / 2,
                y: rect.top
            });
        }
    }["ProductDetailPage.useCallback[handleCellMouseEnter]"], []);
    const handleCellMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductDetailPage.useCallback[handleCellMouseLeave]": ()=>{
            setHoveredCell(null);
        }
    }["ProductDetailPage.useCallback[handleCellMouseLeave]"], []);
    // Memoize data - Use API data if available, otherwise generate mock data
    // These hooks MUST be called before any conditional returns
    const historicalData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[historicalData]": ()=>{
            if (!product) return [];
            console.log('[Chart Debug] product.historicalData:', product.historicalData);
            console.log('[Chart Debug] product.priceData:', product.priceData);
            // Use API data if available
            if (product.historicalData && product.historicalData.dataPoints && product.historicalData.dataPoints.length > 0) {
                console.log('[Chart Debug] Using API historical data');
                // Transform API format to chart format
                // API: { month: "Jan", shops: { "Shop1": 1000, "Shop2": 2000 } }
                // Chart: { month: "Jan", "Shop1": 1000, "Shop2": 2000 }
                const transformed = product.historicalData.dataPoints.map({
                    "ProductDetailPage.useMemo[historicalData].transformed": (point)=>({
                            month: point.month,
                            date: point.date,
                            ...point.shops // Flatten shops object into main object
                        })
                }["ProductDetailPage.useMemo[historicalData].transformed"]);
                console.log('[Chart Debug] Transformed data:', transformed);
                return transformed;
            }
            // Fallback to generated mock data
            console.log('[Chart Debug] Generating mock historical data');
            const sortedPriceData = [
                ...product.priceData
            ].sort({
                "ProductDetailPage.useMemo[historicalData].sortedPriceData": (a, b)=>a.price - b.price
            }["ProductDetailPage.useMemo[historicalData].sortedPriceData"]);
            const lowestPrice = sortedPriceData[0];
            const generated = generateHistoricalData(product.priceData.map({
                "ProductDetailPage.useMemo[historicalData].generated": (p)=>p.shop
            }["ProductDetailPage.useMemo[historicalData].generated"]), lowestPrice.price);
            console.log('[Chart Debug] Generated data:', generated);
            return generated;
        }
    }["ProductDetailPage.useMemo[historicalData]"], [
        product
    ]);
    const heatmapData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[heatmapData]": ()=>{
            if (!product) return [];
            // Use API data if available
            if (product.heatmapData && product.heatmapData.length > 0) {
                return product.heatmapData;
            }
            // Fallback to generated mock data
            const sortedPriceData = [
                ...product.priceData
            ].sort({
                "ProductDetailPage.useMemo[heatmapData].sortedPriceData": (a, b)=>a.price - b.price
            }["ProductDetailPage.useMemo[heatmapData].sortedPriceData"]);
            const lowestPrice = sortedPriceData[0];
            return generateHeatmapData(product.priceData.map({
                "ProductDetailPage.useMemo[heatmapData]": (p)=>p.shop
            }["ProductDetailPage.useMemo[heatmapData]"]), lowestPrice.price);
        }
    }["ProductDetailPage.useMemo[heatmapData]"], [
        product
    ]);
    const priceDistribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[priceDistribution]": ()=>{
            if (!product) return [];
            return generatePriceDistribution(product.priceData);
        }
    }["ProductDetailPage.useMemo[priceDistribution]"], [
        product
    ]);
    // Loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading product..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    // Error state
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: error || 'Proizvod nije pronađen'
                    }, void 0, false, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/"),
                        className: "px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition",
                        children: "Povratak na početnu"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this);
    }
    // Use API analytics if available, otherwise calculate manually
    const sortedPriceData = [
        ...product.priceData
    ].sort((a, b)=>a.price - b.price);
    const lowestPrice = product.priceAnalytics?.currentLowest || sortedPriceData[0];
    const highestPrice = product.priceAnalytics?.currentHighest || sortedPriceData[sortedPriceData.length - 1];
    const averagePrice = product.priceAnalytics?.currentAverage || Math.floor(product.priceData.reduce((sum, data)=>sum + data.price, 0) / product.priceData.length);
    const priceDifference = product.priceAnalytics?.priceDifference || highestPrice.price - lowestPrice.price;
    const priceVariancePercent = product.priceAnalytics?.priceVariancePercent?.toFixed(2) || (priceDifference / lowestPrice.price * 100).toFixed(2);
    const lastUpdate = product.metadata?.lastScrapeTime ? new Date(product.metadata.lastScrapeTime).toLocaleString('sr-RS') : 'Nepoznato';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/"),
                            className: "flex items-center gap-2 text-foreground/70 hover:text-foreground transition mb-3 sm:mb-4 text-sm sm:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 18,
                                    className: "sm:w-5 sm:h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Nazad na katalog"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4 sm:gap-6 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-48 h-40 sm:h-48 bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden border border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.image || "/placeholder.svg",
                                        alt: product.name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block bg-primary text-primary-foreground px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold mb-2",
                                            children: product.purity
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-foreground/60 mb-3 sm:mb-4",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs sm:text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 14,
                                                    className: "sm:w-4 sm:h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm",
                                                    children: [
                                                        "Poslednje ažuriranje: ",
                                                        lastUpdate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-primary mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
                                                children: "Najniža cena"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-foreground",
                                        children: [
                                            lowestPrice.price.toLocaleString("sr-RS"),
                                            " RSD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-muted-foreground mt-1 truncate",
                                        children: lowestPrice.shop
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 sm:p-6 border border-accent/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-accent mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
                                                children: "Prosečna cena"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-foreground",
                                        children: [
                                            averagePrice.toLocaleString("sr-RS"),
                                            " RSD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-muted-foreground mt-1",
                                        children: "Srednja vrednost"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-orange-500 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
                                                children: "Najviša cena"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-foreground",
                                        children: [
                                            highestPrice.price.toLocaleString("sr-RS"),
                                            " RSD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-muted-foreground mt-1 truncate",
                                        children: highestPrice.shop
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl p-4 sm:p-6 border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-foreground/70 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
                                                children: "Razlika"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-foreground",
                                        children: [
                                            priceDifference.toLocaleString("sr-RS"),
                                            " RSD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-muted-foreground mt-1",
                                        children: [
                                            priceVariancePercent,
                                            "% varijacija"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-xl border border-border p-4 sm:p-6 mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4 sm:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                        className: "text-primary",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-foreground",
                                        children: "Cene po prodavnicama"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: sortedPriceData.map((data, idx)=>{
                                    const isLowest = data.price === lowestPrice.price;
                                    const isHighest = data.price === highestPrice.price;
                                    const isExpanded = expandedShop === idx;
                                    // Use API shop historical data if available, otherwise generate mock
                                    const apiShopData = product.shopHistoricalData?.find((sh)=>sh.shop === data.shop);
                                    const shopHistory = apiShopData?.dataPoints || generateShopHistory(data.shop, data.price);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-xl transition border overflow-hidden ${isLowest ? "bg-primary/10 border-primary/40" : isHighest ? "bg-orange-500/10 border-orange-500/40" : "bg-muted/30 border-border/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setExpandedShop(isExpanded ? null : idx),
                                                className: `flex items-start sm:items-center justify-between p-3 sm:p-5 cursor-pointer transition ${isLowest ? "hover:bg-primary/15" : isHighest ? "hover:bg-orange-500/15" : "hover:bg-muted/50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0",
                                                                style: {
                                                                    backgroundColor: shopColors[data.shop] || "#888"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm sm:text-base",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-foreground text-base sm:text-lg truncate",
                                                                                children: data.shop
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            isLowest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-primary text-primary-foreground text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold whitespace-nowrap w-fit",
                                                                                children: "NAJBOLJA"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 397,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            isHighest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-orange-500 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold whitespace-nowrap w-fit",
                                                                                children: "NAJVIŠA"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs sm:text-sm text-muted-foreground mt-1",
                                                                        children: [
                                                                            "Ažurirano pre: ",
                                                                            data.updatedAt
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap",
                                                                        children: [
                                                                            data.price.toLocaleString("sr-RS"),
                                                                            " RSD"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    data.pricePerGram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs sm:text-sm text-muted-foreground mt-1 whitespace-nowrap",
                                                                        children: [
                                                                            data.pricePerGram.toLocaleString("sr-RS", {
                                                                                maximumFractionDigits: 2
                                                                            }),
                                                                            " RSD/г"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-muted-foreground",
                                                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    size: 20,
                                                                    className: "sm:w-6 sm:h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 422,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 20,
                                                                    className: "sm:w-6 sm:h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 422,
                                                                    columnNumber: 91
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this),
                                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 sm:px-5 pb-3 sm:pb-4 pt-2 border-t border-border/30 animate-in slide-in-from-top-2 duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-card/50 rounded-lg p-2 sm:p-3 border border-border/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-[10px] sm:text-xs font-semibold text-foreground flex items-center gap-1 sm:gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                            size: 12,
                                                                            className: "text-primary sm:w-3.5 sm:h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "hidden sm:inline",
                                                                            children: [
                                                                                "Istorija cena - ",
                                                                                (shopView[idx] || "line") === "line" ? "Poslednja 3 meseca" : "Cela godina"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 434,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "sm:hidden",
                                                                            children: "Istorija"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 435,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setShopView({
                                                                                            ...shopView,
                                                                                            [idx]: "line"
                                                                                        }),
                                                                                    className: `px-2 py-1 rounded text-[10px] font-medium transition ${(shopView[idx] || "line") === "line" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/60 hover:text-foreground"}`,
                                                                                    children: "Line"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 439,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setShopView({
                                                                                            ...shopView,
                                                                                            [idx]: "heatmap"
                                                                                        }),
                                                                                    className: `px-2 py-1 rounded text-[10px] font-medium transition ${shopView[idx] === "heatmap" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/60 hover:text-foreground"}`,
                                                                                    children: "Heatmap"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 449,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        (shopView[idx] || "line") === "line" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[9px] sm:text-xs text-muted-foreground hidden sm:block",
                                                                            children: [
                                                                                shopHistory[0].date,
                                                                                " - ",
                                                                                shopHistory[shopHistory.length - 1].date
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 25
                                                        }, this),
                                                        (shopView[idx] || "line") === "line" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                            width: "100%",
                                                            height: 150,
                                                            className: "sm:!h-[180px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                                data: shopHistory,
                                                                margin: {
                                                                    top: 5,
                                                                    right: 5,
                                                                    bottom: 5,
                                                                    left: 0
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: `gradient-${idx}`,
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "5%",
                                                                                    stopColor: shopColors[data.shop] || "#888",
                                                                                    stopOpacity: 0.4
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 476,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "95%",
                                                                                    stopColor: shopColors[data.shop] || "#888",
                                                                                    stopOpacity: 0.05
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 477,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                        strokeDasharray: "3 3",
                                                                        stroke: "hsl(var(--border))",
                                                                        opacity: 0.2
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                        dataKey: "date",
                                                                        stroke: "hsl(var(--muted-foreground))",
                                                                        fontSize: 9,
                                                                        interval: 4,
                                                                        tick: {
                                                                            fill: 'hsl(var(--muted-foreground))'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                        stroke: "hsl(var(--muted-foreground))",
                                                                        fontSize: 9,
                                                                        domain: [
                                                                            'dataMin - 100',
                                                                            'dataMax + 100'
                                                                        ],
                                                                        tickFormatter: (value)=>`${(value / 1000).toFixed(1)}k`,
                                                                        tick: {
                                                                            fill: 'hsl(var(--muted-foreground))'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        contentStyle: {
                                                                            backgroundColor: "hsl(var(--card))",
                                                                            border: "1px solid hsl(var(--border))",
                                                                            borderRadius: "6px",
                                                                            fontSize: "11px",
                                                                            padding: "6px 8px"
                                                                        },
                                                                        labelStyle: {
                                                                            color: "hsl(var(--foreground))",
                                                                            fontWeight: "600",
                                                                            fontSize: "10px"
                                                                        },
                                                                        formatter: (value, name)=>{
                                                                            if (name === "high") return [
                                                                                `${Number(value).toLocaleString("sr-RS")} RSD`,
                                                                                "Najviša"
                                                                            ];
                                                                            if (name === "low") return [
                                                                                `${Number(value).toLocaleString("sr-RS")} RSD`,
                                                                                "Najniža"
                                                                            ];
                                                                            return [
                                                                                `${Number(value).toLocaleString("sr-RS")} RSD`,
                                                                                "Cena"
                                                                            ];
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 495,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                                        type: "monotone",
                                                                        dataKey: "price",
                                                                        stroke: shopColors[data.shop] || "#888",
                                                                        strokeWidth: 2,
                                                                        fill: `url(#gradient-${idx})`,
                                                                        animationDuration: 800,
                                                                        dot: {
                                                                            r: 2,
                                                                            fill: shopColors[data.shop] || "#888",
                                                                            strokeWidth: 0
                                                                        },
                                                                        activeDot: {
                                                                            r: 4,
                                                                            strokeWidth: 2,
                                                                            stroke: "#fff"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 510,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                        type: "monotone",
                                                                        dataKey: "high",
                                                                        stroke: shopColors[data.shop] || "#888",
                                                                        strokeWidth: 1,
                                                                        strokeOpacity: 0.3,
                                                                        dot: false,
                                                                        strokeDasharray: "2 2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                        type: "monotone",
                                                                        dataKey: "low",
                                                                        stroke: shopColors[data.shop] || "#888",
                                                                        strokeWidth: 1,
                                                                        strokeOpacity: 0.3,
                                                                        dot: false,
                                                                        strokeDasharray: "2 2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: (()=>{
                                                                const shopHeatmap = heatmapData.filter((d)=>d.shop === data.shop);
                                                                const weeks = Math.ceil(shopHeatmap.length / 7);
                                                                // Get top 3 lowest and highest prices
                                                                const sortedByPrice = [
                                                                    ...shopHeatmap
                                                                ].sort((a, b)=>a.price - b.price);
                                                                const lowestPrices = sortedByPrice.slice(0, 3);
                                                                const highestPrices = sortedByPrice.slice(-3).reverse();
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full flex gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 overflow-x-auto pb-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-0.5 min-w-max h-[140px] items-center",
                                                                                children: Array.from({
                                                                                    length: weeks
                                                                                }).map((_, weekIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-0.5",
                                                                                        children: Array.from({
                                                                                            length: 7
                                                                                        }).map((_, dayIdx)=>{
                                                                                            const dataPoint = shopHeatmap.find((d)=>d.week === weekIdx && d.day === dayIdx);
                                                                                            if (!dataPoint) {
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2.5 h-2.5"
                                                                                                }, dayIdx, false, {
                                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                    lineNumber: 565,
                                                                                                    columnNumber: 54
                                                                                                }, this);
                                                                                            }
                                                                                            const intensityClass = dataPoint.intensity === 1 ? "bg-primary/20 border-primary/30" : dataPoint.intensity === 2 ? "bg-primary/40 border-primary/50" : dataPoint.intensity === 3 ? "bg-primary/60 border-primary/70" : dataPoint.intensity === 4 ? "bg-primary/80 border-primary" : "bg-muted/40 border-border";
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: `w-2.5 h-2.5 rounded-sm border ${intensityClass} hover:ring-1 hover:ring-primary hover:scale-110 cursor-pointer transition-all duration-150 relative`,
                                                                                                onMouseEnter: (e)=>handleCellMouseEnter(e, data.shop, dataPoint.date, dataPoint.price),
                                                                                                onMouseLeave: handleCellMouseLeave
                                                                                            }, dayIdx, false, {
                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                lineNumber: 575,
                                                                                                columnNumber: 47
                                                                                            }, this);
                                                                                        })
                                                                                    }, weekIdx, false, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 558,
                                                                                        columnNumber: 41
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 556,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 555,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-[200px] flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 gap-2 text-[10px] h-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mb-1.5",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                                                        className: "w-3 h-3 text-green-500"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 594,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "text-[10px] font-semibold text-green-600 dark:text-green-400",
                                                                                                        children: "Najniže"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 595,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                lineNumber: 593,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "space-y-1.5 flex-1",
                                                                                                children: lowestPrices.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col gap-0.5 text-[9px] bg-green-50 dark:bg-green-950/20 rounded px-2 py-1",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-muted-foreground",
                                                                                                                children: new Date(item.date).toLocaleDateString('sr-RS', {
                                                                                                                    day: 'numeric',
                                                                                                                    month: 'short'
                                                                                                                })
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                                lineNumber: 600,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "font-bold text-green-600 dark:text-green-400",
                                                                                                                children: [
                                                                                                                    item.price.toLocaleString("sr-RS"),
                                                                                                                    " RSD"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                                lineNumber: 603,
                                                                                                                columnNumber: 47
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, i, true, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 599,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                lineNumber: 597,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 592,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mb-1.5",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                                                        className: "w-3 h-3 text-red-500"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 614,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "text-[10px] font-semibold text-red-600 dark:text-red-400",
                                                                                                        children: "Najviše"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 615,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                lineNumber: 613,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "space-y-1.5 flex-1",
                                                                                                children: highestPrices.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col gap-0.5 text-[9px] bg-red-50 dark:bg-red-950/20 rounded px-2 py-1",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-muted-foreground",
                                                                                                                children: new Date(item.date).toLocaleDateString('sr-RS', {
                                                                                                                    day: 'numeric',
                                                                                                                    month: 'short'
                                                                                                                })
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                                lineNumber: 620,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "font-bold text-red-600 dark:text-red-400",
                                                                                                                children: [
                                                                                                                    item.price.toLocaleString("sr-RS"),
                                                                                                                    " RSD"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                                lineNumber: 623,
                                                                                                                columnNumber: 47
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, i, true, {
                                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                        lineNumber: 619,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                                lineNumber: 617,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 612,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 590,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 553,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 27
                                                        }, this),
                                                        (()=>{
                                                            // Use API statistics if available, otherwise calculate from shopHistory
                                                            const shopStats = apiShopData?.statistics || {
                                                                lowest: Math.min(...shopHistory.map((h)=>h.price)),
                                                                average: Math.floor(shopHistory.reduce((sum, h)=>sum + h.price, 0) / shopHistory.length),
                                                                highest: Math.max(...shopHistory.map((h)=>h.price)),
                                                                variance: Math.max(...shopHistory.map((h)=>h.price)) - Math.min(...shopHistory.map((h)=>h.price))
                                                            };
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-1.5 sm:gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-emerald-500/10 rounded-lg p-1.5 sm:p-2 border border-emerald-500/30",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mb-0.5",
                                                                                children: "Najniža"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 651,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400",
                                                                                children: [
                                                                                    shopStats.lowest.toLocaleString("sr-RS"),
                                                                                    " RSD"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-blue-500/10 rounded-lg p-1.5 sm:p-2 border border-blue-500/30",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-medium mb-0.5",
                                                                                children: "Prosečna"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 657,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400",
                                                                                children: [
                                                                                    shopStats.average.toLocaleString("sr-RS"),
                                                                                    " RSD"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 658,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 656,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-red-500/10 rounded-lg p-1.5 sm:p-2 border border-red-500/30",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[9px] sm:text-[10px] text-red-600 dark:text-red-400 font-medium mb-0.5",
                                                                                children: "Najviša"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] sm:text-xs font-bold text-red-600 dark:text-red-400",
                                                                                children: [
                                                                                    shopStats.highest.toLocaleString("sr-RS"),
                                                                                    " RSD"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 662,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-purple-500/10 rounded-lg p-1.5 sm:p-2 border border-purple-500/30",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[9px] sm:text-[10px] text-purple-600 dark:text-purple-400 font-medium mb-0.5",
                                                                                children: "Razlika"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 669,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] sm:text-xs font-bold text-purple-600 dark:text-purple-400",
                                                                                children: [
                                                                                    shopStats.variance.toLocaleString("sr-RS"),
                                                                                    " RSD"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 670,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 668,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 29
                                                            }, this);
                                                        })()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-xl border border-border p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4 sm:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "text-primary",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-foreground",
                                        children: "Analitika cena"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4 sm:mb-6 border-b border-border pb-3 sm:pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveChart("history"),
                                        className: `px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${activeChart === "history" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground/70 hover:bg-muted/80"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Istorija cena (12 meseci)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 703,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "Istorija"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveChart("distribution"),
                                        className: `px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${activeChart === "distribution" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground/70 hover:bg-muted/80"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Distribucija cena"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "Distribucija"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveChart("perGram"),
                                        className: `px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${activeChart === "perGram" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground/70 hover:bg-muted/80"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Cena po gramu"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "Po gramu"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 726,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 717,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            activeChart === "history" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 sm:mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm sm:text-lg font-semibold text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Istorija cena po prodavnicama"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:hidden",
                                                    children: "Istorija cena"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 734,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 733,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[700px] overflow-y-auto",
                                        children: [
                                            historicalData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 text-muted-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Nema dostupnih podataka za prikaz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 19
                                            }, this),
                                            historicalData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 400,
                                                className: "sm:!h-[600px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                    data: historicalData,
                                                    margin: {
                                                        top: 10,
                                                        right: 30,
                                                        left: 0,
                                                        bottom: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            stroke: "hsl(var(--border))",
                                                            opacity: 0.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "month",
                                                            stroke: "hsl(var(--muted-foreground))",
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 500
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            stroke: "hsl(var(--muted-foreground))",
                                                            domain: [
                                                                'dataMin - 200',
                                                                'dataMax + 200'
                                                            ],
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 500
                                                            },
                                                            tickFormatter: (value)=>`${(value / 1000).toFixed(1)}k`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            content: ({ active, payload, label })=>{
                                                                if (!active || !payload || !payload.length) return null;
                                                                // Find the lowest price in this month's data
                                                                const monthPrices = payload.map((p)=>p.value);
                                                                const minPriceInMonth = Math.min(...monthPrices);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "rgba(255, 255, 255, 0.98)",
                                                                        border: "2px solid hsl(var(--border))",
                                                                        borderRadius: "10px",
                                                                        padding: "12px 16px",
                                                                        boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                                                                        backdropFilter: "blur(10px)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                color: "hsl(var(--foreground))",
                                                                                fontWeight: "700",
                                                                                fontSize: "13px",
                                                                                marginBottom: "8px",
                                                                                paddingBottom: "6px",
                                                                                borderBottom: "1px solid hsl(var(--border))"
                                                                            },
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 778,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        payload.map((entry, index)=>{
                                                                            const isLowest = entry.value === minPriceInMonth;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    color: isLowest ? "#10b981" : "hsl(var(--foreground))",
                                                                                    fontWeight: isLowest ? "700" : "600",
                                                                                    fontSize: "12px",
                                                                                    padding: "6px 8px",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    gap: "8px",
                                                                                    backgroundColor: isLowest ? "rgba(16, 185, 129, 0.1)" : "transparent",
                                                                                    borderRadius: "6px",
                                                                                    borderLeft: isLowest ? "3px solid #10b981" : "3px solid transparent",
                                                                                    marginBottom: "3px"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            width: "12px",
                                                                                            height: "12px",
                                                                                            backgroundColor: entry.stroke,
                                                                                            borderRadius: "50%",
                                                                                            display: "inline-block",
                                                                                            border: "2px solid white",
                                                                                            boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 804,
                                                                                        columnNumber: 33
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            flex: 1
                                                                                        },
                                                                                        children: entry.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 813,
                                                                                        columnNumber: 33
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontWeight: "700"
                                                                                        },
                                                                                        children: [
                                                                                            Number(entry.value).toLocaleString("sr-RS"),
                                                                                            " RSD"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 814,
                                                                                        columnNumber: 33
                                                                                    }, void 0),
                                                                                    isLowest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: "14px"
                                                                                        },
                                                                                        children: "🏆"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                        lineNumber: 815,
                                                                                        columnNumber: 46
                                                                                    }, void 0)
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 791,
                                                                                columnNumber: 31
                                                                            }, void 0);
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 25
                                                                }, void 0);
                                                            },
                                                            cursor: {
                                                                stroke: "hsl(var(--primary))",
                                                                strokeWidth: 2,
                                                                strokeDasharray: "5 5"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                            wrapperStyle: {
                                                                paddingTop: "20px"
                                                            },
                                                            iconType: "line"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 19
                                                        }, this),
                                                        product.priceData.map((data, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                type: "monotone",
                                                                dataKey: data.shop,
                                                                stroke: shopColors[data.shop] || "#8B8B8B",
                                                                strokeWidth: 4,
                                                                dot: {
                                                                    r: 5,
                                                                    fill: shopColors[data.shop] || "#8B8B8B",
                                                                    strokeWidth: 2,
                                                                    stroke: "#fff"
                                                                },
                                                                activeDot: {
                                                                    r: 8,
                                                                    strokeWidth: 3,
                                                                    stroke: "#fff"
                                                                },
                                                                animationDuration: 1500,
                                                                animationEasing: "ease-in-out"
                                                            }, data.shop, false, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 732,
                                columnNumber: 13
                            }, this),
                            activeChart === "distribution" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4",
                                        children: "Distribucija trenutnih cena"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 851,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[500px] overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            className: "sm:!h-[450px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: priceDistribution,
                                                margin: {
                                                    top: 20,
                                                    right: 30,
                                                    left: 0,
                                                    bottom: 5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "hsl(var(--border))",
                                                        opacity: 0.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "shop",
                                                        stroke: "hsl(var(--muted-foreground))",
                                                        angle: -15,
                                                        textAnchor: "end",
                                                        height: 80,
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 500
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "hsl(var(--muted-foreground))",
                                                        domain: [
                                                            'dataMin - 300',
                                                            'dataMax + 300'
                                                        ],
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 500
                                                        },
                                                        tickFormatter: (value)=>`${(value / 1000).toFixed(1)}k`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        content: ({ active, payload, label })=>{
                                                            if (!active || !payload || !payload.length) return null;
                                                            const prices = priceDistribution.map((p)=>p.price);
                                                            const minPrice = Math.min(...prices);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    backgroundColor: "rgba(255, 255, 255, 0.98)",
                                                                    border: "2px solid hsl(var(--border))",
                                                                    borderRadius: "10px",
                                                                    padding: "12px 16px",
                                                                    boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                                                                    backdropFilter: "blur(10px)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: "hsl(var(--foreground))",
                                                                            fontWeight: "700",
                                                                            fontSize: "13px",
                                                                            marginBottom: "8px",
                                                                            paddingBottom: "6px",
                                                                            borderBottom: "1px solid hsl(var(--border))"
                                                                        },
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 886,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    payload.map((entry, index)=>{
                                                                        const isLowest = entry.value === minPrice;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                color: isLowest ? "#10b981" : "hsl(var(--foreground))",
                                                                                fontWeight: isLowest ? "700" : "600",
                                                                                fontSize: "12px",
                                                                                padding: "6px 8px",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: "8px",
                                                                                backgroundColor: isLowest ? "rgba(16, 185, 129, 0.1)" : "transparent",
                                                                                borderRadius: "6px",
                                                                                borderLeft: isLowest ? "3px solid #10b981" : "3px solid transparent",
                                                                                marginBottom: "3px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        width: "12px",
                                                                                        height: "12px",
                                                                                        backgroundColor: entry.fill || entry.stroke,
                                                                                        borderRadius: "50%",
                                                                                        display: "inline-block",
                                                                                        border: "2px solid white",
                                                                                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        flex: 1
                                                                                    },
                                                                                    children: entry.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 921,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontWeight: "700"
                                                                                    },
                                                                                    children: [
                                                                                        Number(entry.value).toLocaleString("sr-RS"),
                                                                                        " RSD"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 922,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                isLowest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: "14px"
                                                                                    },
                                                                                    children: "🏆"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                    lineNumber: 923,
                                                                                    columnNumber: 46
                                                                                }, void 0)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                            lineNumber: 899,
                                                                            columnNumber: 31
                                                                        }, void 0);
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 25
                                                            }, void 0);
                                                        },
                                                        cursor: {
                                                            stroke: "hsl(var(--primary))",
                                                            strokeWidth: 2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 19
                                                    }, this),
                                                    priceDistribution.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "price",
                                                            fill: shopColors[entry.shop] || "hsl(var(--primary))",
                                                            radius: [
                                                                12,
                                                                12,
                                                                0,
                                                                0
                                                            ],
                                                            label: {
                                                                position: "top",
                                                                fill: "hsl(var(--foreground))",
                                                                fontSize: 12,
                                                                fontWeight: 600,
                                                                formatter: (value)=>`${Number(value).toLocaleString("sr-RS")} RSD`
                                                            }
                                                        }, `bar-${index}`, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 854,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 853,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 850,
                                columnNumber: 13
                            }, this),
                            activeChart === "perGram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4",
                                        children: "Cena po gramu - Poređenje"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 956,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[500px] overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            className: "sm:!h-[450px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                data: priceDistribution,
                                                margin: {
                                                    top: 20,
                                                    right: 30,
                                                    left: 0,
                                                    bottom: 5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                            id: "perGramGradient",
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "0",
                                                            y2: "1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "5%",
                                                                    stopColor: "hsl(var(--primary))",
                                                                    stopOpacity: 0.8
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "95%",
                                                                    stopColor: "hsl(var(--primary))",
                                                                    stopOpacity: 0.1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "hsl(var(--border))",
                                                        opacity: 0.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "shop",
                                                        stroke: "hsl(var(--muted-foreground))",
                                                        angle: -15,
                                                        textAnchor: "end",
                                                        height: 80,
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 500
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "hsl(var(--muted-foreground))",
                                                        domain: [
                                                            'dataMin - 50',
                                                            'dataMax + 50'
                                                        ],
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 500
                                                        },
                                                        tickFormatter: (value)=>`${(value / 1000).toFixed(1)}k`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        content: ({ active, payload, label })=>{
                                                            if (!active || !payload || !payload.length) return null;
                                                            const pricesPerGram = priceDistribution.map((p)=>p.pricePerGram);
                                                            const minPricePerGram = Math.min(...pricesPerGram);
                                                            const currentShop = priceDistribution.find((p)=>p.shop === label);
                                                            if (!currentShop) return null;
                                                            const isLowest = currentShop.pricePerGram === minPricePerGram;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    backgroundColor: "rgba(255, 255, 255, 0.98)",
                                                                    border: "2px solid hsl(var(--border))",
                                                                    borderRadius: "10px",
                                                                    padding: "12px 16px",
                                                                    boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                                                                    backdropFilter: "blur(10px)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: "hsl(var(--foreground))",
                                                                            fontWeight: "700",
                                                                            fontSize: "13px",
                                                                            marginBottom: "8px",
                                                                            paddingBottom: "6px",
                                                                            borderBottom: "1px solid hsl(var(--border))"
                                                                        },
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 1002,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: isLowest ? "#10b981" : "hsl(var(--foreground))",
                                                                            fontWeight: isLowest ? "700" : "600",
                                                                            fontSize: "12px",
                                                                            padding: "6px 8px",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px",
                                                                            backgroundColor: isLowest ? "rgba(16, 185, 129, 0.1)" : "transparent",
                                                                            borderRadius: "6px",
                                                                            borderLeft: isLowest ? "3px solid #10b981" : "3px solid transparent"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    width: "12px",
                                                                                    height: "12px",
                                                                                    backgroundColor: "hsl(var(--primary))",
                                                                                    borderRadius: "50%",
                                                                                    display: "inline-block",
                                                                                    border: "2px solid white",
                                                                                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 1024,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    flex: 1
                                                                                },
                                                                                children: "Cena po gramu"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 1033,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: "700"
                                                                                },
                                                                                children: [
                                                                                    Number(currentShop.pricePerGram).toLocaleString("sr-RS"),
                                                                                    " RSD/г"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 1034,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            isLowest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "14px"
                                                                                },
                                                                                children: "🏆"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                                lineNumber: 1035,
                                                                                columnNumber: 42
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                        lineNumber: 1012,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                                lineNumber: 994,
                                                                columnNumber: 25
                                                            }, void 0);
                                                        },
                                                        cursor: {
                                                            stroke: "hsl(var(--primary))",
                                                            strokeWidth: 2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                        type: "monotone",
                                                        dataKey: "pricePerGram",
                                                        stroke: "hsl(var(--primary))",
                                                        fill: "url(#perGramGradient)",
                                                        strokeWidth: 4,
                                                        dot: {
                                                            r: 6,
                                                            fill: "hsl(var(--primary))",
                                                            strokeWidth: 3,
                                                            stroke: "#fff"
                                                        },
                                                        activeDot: {
                                                            r: 9,
                                                            strokeWidth: 4,
                                                            stroke: "#fff"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "pricePerGram",
                                                        stroke: "hsl(var(--primary))",
                                                        strokeWidth: 3,
                                                        dot: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 19
                                                    }, this),
                                                    priceDistribution.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "pricePerGram",
                                                            fill: shopColors[entry.shop] || "hsl(var(--primary))",
                                                            fillOpacity: 0.2,
                                                            radius: [
                                                                8,
                                                                8,
                                                                0,
                                                                0
                                                            ]
                                                        }, `indicator-${index}`, false, {
                                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                            lineNumber: 958,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 955,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            hoveredCell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 pointer-events-none",
                style: {
                    left: `${hoveredCell.x}px`,
                    top: `${hoveredCell.y - 10}px`,
                    transform: 'translate(-50%, -100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border-2 border-primary shadow-2xl rounded-lg p-3 animate-in fade-in zoom-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: shopColors[hoveredCell.shop] || "#888"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm text-foreground",
                                        children: hoveredCell.shop
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 1086,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground mb-1",
                                children: new Date(hoveredCell.date).toLocaleDateString('sr-RS', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 1093,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-primary",
                                children: [
                                    hoveredCell.price.toLocaleString("sr-RS"),
                                    " RSD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                                lineNumber: 1100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 1085,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 bg-card border-r-2 border-b-2 border-primary absolute left-1/2 -translate-x-1/2 -bottom-1.5 rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                        lineNumber: 1105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
                lineNumber: 1077,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/goldara/app/products/[id]/page.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_s(ProductDetailPage, "tqARX5wR5ZuCWUJVO8p7SmCPqZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$goldara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_goldara_9421a5b5._.js.map