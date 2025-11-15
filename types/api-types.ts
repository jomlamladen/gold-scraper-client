/**
 * API Type Definitions - Goldara
 * 
 * Ovi tipovi definišu strukturu podataka između frontend-a i backend-a.
 * Backend tim treba da implementira API koji vraća podatke u ovom formatu.
 */

// ============================================
// ENUMS
// ============================================

export type ProductCategory = 
  | "gold_bars" 
  | "gold_coins" 
  | "silver_bars" 
  | "silver_coins";

export type Availability = 
  | "in_stock" 
  | "limited_stock" 
  | "out_of_stock" 
  | "pre_order";

export type TrendDirection = "up" | "down" | "stable";

export type DataQuality = "excellent" | "good" | "fair" | "poor";

export type ScrapingStatus = "active" | "paused" | "error";

export type SortBy = 
  | "price_asc" 
  | "price_desc" 
  | "name_asc" 
  | "name_desc" 
  | "purity_desc" 
  | "updated_desc";

// ============================================
// SINGLE PRODUCT DETAIL TYPES
// ============================================

export interface PriceData {
  shop: string;
  shopUrl: string;
  price: number;
  pricePerGram: number;
  updatedAt: string; // Relativno vreme, npr. "Pre 2h"
  availability: Availability;
  shippingInfo?: string;
  rating?: number; // 0-5
}

export interface HistoricalDataPoint {
  date: string; // ISO 8601
  month: string; // "Jan", "Feb", etc.
  shops: Record<string, number>; // { "GoldHub.net": 14200, ... }
  average: number;
  lowest: number;
  highest: number;
}

export interface HistoricalData {
  period: "12_months";
  dataPoints: HistoricalDataPoint[];
}

export interface ShopHistoryDataPoint {
  date: string; // ISO 8601
  dateLabel: string; // "15. jan"
  price: number;
  high: number;
  low: number;
  average: number;
}

export interface ShopStatistics {
  lowest: number;
  highest: number;
  average: number;
  variance: number;
}

export interface ShopHistoricalData {
  shop: string;
  period: "3_months";
  dataPoints: ShopHistoryDataPoint[];
  statistics: ShopStatistics;
}

export interface HeatmapDataPoint {
  date: string; // ISO 8601, "2024-01-01"
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  weekNumber: number; // 0-52
  price: number;
  intensity: 0 | 1 | 2 | 3 | 4;
  priceChange?: number;
  percentChange?: number;
}

export interface ShopHeatmapData {
  shop: string;
  year: number;
  dataPoints: HeatmapDataPoint[];
}

export interface CurrentPriceInfo {
  shop: string;
  price: number;
  pricePerGram: number;
  updatedAt: string;
}

export interface PriceAnalytics {
  currentLowest: CurrentPriceInfo;
  currentHighest: CurrentPriceInfo;
  currentAverage: number;
  priceDifference: number;
  priceVariancePercent: number;
  recommendedShop: string;
  savingsVsAverage: number;
  savingsVsHighest: number;
}

export interface ProductMetadata {
  totalShops: number;
  lastScrapeTime: string; // ISO 8601
  nextUpdateIn: string; // "30 minutes"
  dataQuality: DataQuality;
  scrapingStatus: ScrapingStatus;
}

export interface ProductDetail {
  id: string;  // MongoDB ObjectId as string
  name: string;
  weight: string;
  purity: string;
  image: string;
  description: string;
  category: ProductCategory;
  lastUpdated: string; // ISO 8601
  priceData: PriceData[];
  historicalData: HistoricalData;
  shopHistoricalData: ShopHistoricalData[];
  heatmapData: ShopHeatmapData[];
  priceAnalytics: PriceAnalytics;
  metadata: ProductMetadata;
}

export interface ProductDetailResponse {
  success: true;
  data: ProductDetail;
}

// ============================================
// PRODUCTS LIST TYPES
// ============================================

export interface PriceRange {
  lowest: number;
  highest: number;
  average: number;
  difference: number;
  lowestShop: string;
  highestShop: string;
}

export interface Trending {
  direction: TrendDirection;
  percentChange: number;
  period: "24h" | "7d" | "30d";
}

export interface ProductListItem {
  id: string;  // MongoDB ObjectId as string
  name: string;
  weight: string;
  purity: string;
  image: string;
  description: string;
  category: ProductCategory;
  priceRange: PriceRange;
  availability: Availability;
  shopCount: number;
  lastUpdated: string; // ISO 8601
  trending?: Trending;
}

export interface CategoryInfo {
  value: ProductCategory | "all";
  label: string;
  count: number;
}

export interface Filters {
  appliedCategory: ProductCategory | "all";
  appliedSortBy: SortBy;
  availableCategories: CategoryInfo[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ListMetadata {
  lastScrapeTime: string; // ISO 8601
  nextUpdateIn: string; // "30 minutes"
  totalShops: number;
}

export interface ProductListData {
  products: ProductListItem[];
  pagination: Pagination;
  filters: Filters;
  metadata: ListMetadata;
}

export interface ProductListResponse {
  success: true;
  data: ProductListData;
}

// ============================================
// ERROR TYPES
// ============================================

export interface ApiErrorDetails {
  [key: string]: string;
}

export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: ApiErrorDetails;
}

export interface ErrorResponse {
  success: false;
  error: ApiError;
}

// ============================================
// REQUEST TYPES
// ============================================

export interface ProductListQuery {
  category?: ProductCategory | "all";
  sortBy?: SortBy;
  page?: number;
  limit?: number;
}

export interface ProductDetailParams {
  id: string;  // MongoDB ObjectId as string
}

// ============================================
// HELPER TYPES
// ============================================

export type ApiResponse<T> = T | ErrorResponse;

export type ProductDetailApiResponse = ApiResponse<ProductDetailResponse>;
export type ProductListApiResponse = ApiResponse<ProductListResponse>;

// ============================================
// FRONTEND-SPECIFIC TYPES (za internu upotrebu)
// ============================================

export interface ShopColors {
  [shopName: string]: string;
}

export interface ChartDataPoint {
  date?: string;
  month?: string;
  [key: string]: any;
}

export interface TooltipPayload {
  value: number;
  name: string;
  color: string;
  payload: any;
}

// ============================================
// CONSTANTS
// ============================================

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  "gold_bars",
  "gold_coins",
  "silver_bars",
  "silver_coins",
] as const;

export const AVAILABILITY_STATUS: readonly Availability[] = [
  "in_stock",
  "limited_stock",
  "out_of_stock",
  "pre_order",
] as const;

export const SORT_OPTIONS: readonly SortBy[] = [
  "price_asc",
  "price_desc",
  "name_asc",
  "name_desc",
  "purity_desc",
  "updated_desc",
] as const;

// ============================================
// TYPE GUARDS
// ============================================

export function isErrorResponse(response: any): response is ErrorResponse {
  return response && response.success === false && 'error' in response;
}

export function isProductDetailResponse(response: any): response is ProductDetailResponse {
  return response && response.success === true && 'data' in response && 'priceData' in response.data;
}

export function isProductListResponse(response: any): response is ProductListResponse {
  return response && response.success === true && 'data' in response && 'products' in response.data;
}

