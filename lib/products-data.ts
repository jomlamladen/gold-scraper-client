export interface PriceData {
  shop: string
  price: number
  updatedAt: string
  pricePerGram?: number
}

export interface Product {
  id: string  // Using string for consistency with MongoDB ObjectId
  name: string
  weight: string
  purity: string
  image: string
  description: string
  priceData: PriceData[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Poluga 1g Čistog Zlata",
    weight: "1g",
    purity: "99.9%",
    image: "/gold-bar-1g-luxury-premium.jpg",
    description: "Idealna poluga za početnike u investiciji zlata",
    priceData: [
      { shop: "GoldShop.rs", price: 2850, updatedAt: "5m", pricePerGram: 2850 },
      { shop: "MetalStore.com", price: 2870, updatedAt: "12m", pricePerGram: 2870 },
      { shop: "Аурум.rs", price: 2890, updatedAt: "2h", pricePerGram: 2890 },
      { shop: "PreciousMetal.co", price: 2920, updatedAt: "15m", pricePerGram: 2920 },
      { shop: "GoldHub.net", price: 2880, updatedAt: "8m", pricePerGram: 2880 },
    ],
  },
  {
    id: "2",
    name: "Poluga 5g Čistog Zlata",
    weight: "5g",
    purity: "99.9%",
    image: "/gold-bar-5g-precious-metal.jpg",
    description: "Popularna veličina za ozbiljne investitore",
    priceData: [
      { shop: "GoldShop.rs", price: 14200, updatedAt: "3m", pricePerGram: 2840 },
      { shop: "MetalStore.com", price: 14350, updatedAt: "8m", pricePerGram: 2870 },
      { shop: "Аурум.rs", price: 14450, updatedAt: "1h", pricePerGram: 2890 },
      { shop: "PreciousMetal.co", price: 14600, updatedAt: "18m", pricePerGram: 2920 },
      { shop: "GoldHub.net", price: 14400, updatedAt: "5m", pricePerGram: 2880 },
    ],
  },
  {
    id: "3",
    name: "Poluga 10g Čistog Zlata",
    weight: "10g",
    purity: "99.9%",
    image: "/gold-bar-10g-bullion-ingot.jpg",
    description: "Savršena za dugoročne investicije",
    priceData: [
      { shop: "GoldShop.rs", price: 28300, updatedAt: "2m", pricePerGram: 2830 },
      { shop: "MetalStore.com", price: 28600, updatedAt: "6m", pricePerGram: 2860 },
      { shop: "Аурум.rs", price: 28900, updatedAt: "45m", pricePerGram: 2890 },
      { shop: "PreciousMetal.co", price: 29100, updatedAt: "20m", pricePerGram: 2910 },
      { shop: "GoldHub.net", price: 28750, updatedAt: "4m", pricePerGram: 2875 },
    ],
  },
  {
    id: "4",
    name: "Poluga 20g Čistog Zlata",
    weight: "20g",
    purity: "99.9%",
    image: "/gold-bar-20g-precious-metal.jpg",
    description: "Premium investicija za iskusne investitore",
    priceData: [
      { shop: "GoldShop.rs", price: 56500, updatedAt: "1m", pricePerGram: 2825 },
      { shop: "MetalStore.com", price: 56900, updatedAt: "4m", pricePerGram: 2845 },
      { shop: "Аурум.rs", price: 57300, updatedAt: "30m", pricePerGram: 2865 },
      { shop: "PreciousMetal.co", price: 57800, updatedAt: "22m", pricePerGram: 2890 },
      { shop: "GoldHub.net", price: 57100, updatedAt: "3m", pricePerGram: 2855 },
    ],
  },
  {
    id: "5",
    name: "Poluga 50g Čistog Zlata",
    weight: "50g",
    purity: "99.9%",
    image: "/gold-bar-50g-premium-bullion.jpg",
    description: "Investicija po znanju za uspešne investitore",
    priceData: [
      { shop: "GoldShop.rs", price: 141200, updatedAt: "4m", pricePerGram: 2824 },
      { shop: "MetalStore.com", price: 142300, updatedAt: "10m", pricePerGram: 2846 },
      { shop: "Аурум.rs", price: 143400, updatedAt: "1h30m", pricePerGram: 2868 },
      { shop: "PreciousMetal.co", price: 144500, updatedAt: "25m", pricePerGram: 2890 },
      { shop: "GoldHub.net", price: 142800, updatedAt: "6m", pricePerGram: 2856 },
    ],
  },
  {
    id: "6",
    name: "Poluga 100g Čistog Zlata",
    weight: "100g",
    purity: "99.9%",
    image: "/gold-bar-100g-luxury-ingot.jpg",
    description: "Vrhunska investicija za institucionalne investitore",
    priceData: [
      { shop: "GoldShop.rs", price: 282300, updatedAt: "3m", pricePerGram: 2823 },
      { shop: "MetalStore.com", price: 283600, updatedAt: "9m", pricePerGram: 2836 },
      { shop: "Аурум.rs", price: 284900, updatedAt: "55m", pricePerGram: 2849 },
      { shop: "PreciousMetal.co", price: 286200, updatedAt: "28m", pricePerGram: 2862 },
      { shop: "GoldHub.net", price: 285000, updatedAt: "7m", pricePerGram: 2850 },
    ],
  },
]

// Mapiranje težine na default slike
export const defaultProductImages: { [key: string]: string } = {
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
  "31.1 g": "/gold-coins-investment-wealth-precious-metals.jpg",
}

// Helper function to get default image by weight
export const getDefaultImageByWeight = (weight: string): string => {
  // Normalize weight (remove spaces, convert to lowercase)
  const normalizedWeight = weight.toLowerCase().trim()
  return defaultProductImages[normalizedWeight] || "/placeholder.jpg"
}

// Dobijanje trenutnog timestamp-a za poslednje ažuriranje
export const getLastUpdateTime = (): string => {
  const now = new Date()
  return now.toLocaleString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

