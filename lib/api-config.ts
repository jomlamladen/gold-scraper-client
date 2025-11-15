/**
 * API Configuration
 * 
 * Kontroliše da li aplikacija koristi mock podatke ili real backend API.
 * Promeni USE_MOCK_DATA flag da switchuješ između mock i real data.
 */

// 🔧 TOGGLE OVDE - Promeni na false za real API
export const USE_MOCK_DATA = true;

// Backend API URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

// API Endpoints
export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/api/products`,
  productDetail: (id: string) => `${API_BASE_URL}/api/products/${id}`,  // MongoDB ObjectId as string
};

// Config object
export const apiConfig = {
  useMockData: USE_MOCK_DATA,
  baseUrl: API_BASE_URL,
  timeout: 10000, // 10 seconds
  retries: 3,
};

// Helper function za debug
export const getApiMode = () => {
  return USE_MOCK_DATA ? '🔵 MOCK MODE' : '🟢 REAL API MODE';
};

// Log current mode
if (typeof window !== 'undefined') {
  console.log(`[API Config] ${getApiMode()}`);
}

