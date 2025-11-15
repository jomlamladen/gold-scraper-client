"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, TrendingUp, TrendingDown, Store, Clock, BarChart3, ChevronDown, ChevronUp } from "lucide-react"
import { fetchProductDetail } from "@/lib/api-service"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  ComposedChart,
} from "recharts"
import { useState, useEffect, useMemo, useCallback } from "react"
import type { ProductDetail } from "@/types/api-types"

// Generate historical data for price trends
const generateHistoricalData = (shops: string[], basePrice: number) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]
  return months.map((month, idx) => {
    const dataPoint: any = { month }
    shops.forEach((shop) => {
      const variance = Math.random() * 200 - 100
      dataPoint[shop] = Math.floor(basePrice + idx * 15 + variance)
    })
    return dataPoint
  })
}

// Generate heatmap data (365 days)
const generateHeatmapData = (shops: string[], basePrice: number) => {
  const data: any[] = []
  const today = new Date()
  
  // Generate data for each day of the year
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
    const weekNumber = Math.floor((364 - i) / 7)
    
    shops.forEach((shop) => {
      const variance = (Math.random() - 0.5) * 300
      const seasonalVariance = Math.sin(i / 30) * 100
      const price = Math.floor(basePrice + variance + seasonalVariance)
      
      // Calculate intensity based on price variation
      const priceChange = Math.abs(price - basePrice)
      const intensity = Math.min(Math.floor((priceChange / 300) * 4) + 1, 4)
      
      data.push({
        date: date.toISOString().split('T')[0],
        day: dayOfWeek,
        week: weekNumber,
        shop,
        price,
        intensity,
      })
    })
  }
  
  return data
}

// Generate price distribution data
const generatePriceDistribution = (priceData: any[]) => {
  return priceData.map((data) => ({
    shop: data.shop,
    price: data.price,
    pricePerGram: data.pricePerGram || 0,
  }))
}

// Generate 3-month history for a single shop with daily data
const generateShopHistory = (shopName: string, currentPrice: number) => {
  const dataPoints = []
  const today = new Date()
  const daysToShow = 90 // 3 months
  const pointsToShow = 30 // Show every 3rd day for cleaner chart
  
  for (let i = pointsToShow - 1; i >= 0; i--) {
    const date = new Date(today)
    const daysBack = i * 3 // Every 3 days
    date.setDate(date.getDate() - daysBack)
    
    const dateLabel = date.toLocaleDateString("sr-RS", { day: "numeric", month: "short" })
    
    // Create realistic price variations
    const baseVariance = (Math.random() - 0.5) * 80 // Random daily fluctuation
    const trendComponent = (pointsToShow - i) * 3 // Slight upward trend
    const seasonalVariance = Math.sin(i / 5) * 40 // Seasonal wave pattern
    
    const price = Math.floor(currentPrice - trendComponent + baseVariance + seasonalVariance)
    
    dataPoints.push({
      date: dateLabel,
      price: price,
      high: price + Math.floor(Math.random() * 30),
      low: price - Math.floor(Math.random() * 30),
    })
  }
  
  return dataPoints
}

// Shop colors for charts
const shopColors: { [key: string]: string } = {
  "GoldShop.rs": "#FFA500",
  "MetalStore.com": "#D4AF37",
  "Аурум.rs": "#FFD700",
  "PreciousMetal.co": "#DAA520",
  "GoldHub.net": "#CD7F32",
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string
  
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeChart, setActiveChart] = useState<"history" | "distribution" | "perGram">("history")
  const [expandedShop, setExpandedShop] = useState<number | null>(null)
  const [shopView, setShopView] = useState<{ [key: number]: "line" | "heatmap" }>({})
  const [hoveredCell, setHoveredCell] = useState<{ shop: string; date: string; price: number; x: number; y: number } | null>(null)
  
  // Fetch product data
  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetchProductDetail(productId)
        setProduct(response.data)
      } catch (err) {
        console.error('Failed to load product:', err)
        setError('Failed to load product details. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      loadProduct()
    }
  }, [productId])
  
  // Memoize heatmap handlers to prevent rerenders
  const handleCellMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>, shopName: string, date: string, price: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoveredCell({
      shop: shopName,
      date: date,
      price: price,
      x: rect.left + rect.width / 2,
      y: rect.top
    })
  }, [])
  
  const handleCellMouseLeave = useCallback(() => {
    setHoveredCell(null)
  }, [])

  // Memoize data - Use API data if available, otherwise generate mock data
  // These hooks MUST be called before any conditional returns
  const historicalData = useMemo(() => {
    if (!product) return []
    
    console.log('[Chart Debug] product.historicalData:', product.historicalData)
    console.log('[Chart Debug] product.priceData:', product.priceData)
    
    // Use API data if available
    if (product.historicalData && product.historicalData.dataPoints && product.historicalData.dataPoints.length > 0) {
      console.log('[Chart Debug] Using API historical data')
      
      // Transform API format to chart format
      // API: { month: "Jan", shops: { "Shop1": 1000, "Shop2": 2000 } }
      // Chart: { month: "Jan", "Shop1": 1000, "Shop2": 2000 }
      const transformed = product.historicalData.dataPoints.map(point => ({
        month: point.month,
        date: point.date,
        ...point.shops  // Flatten shops object into main object
      }))
      
      console.log('[Chart Debug] Transformed data:', transformed)
      return transformed
    }
    
    // Fallback to generated mock data
    console.log('[Chart Debug] Generating mock historical data')
    const sortedPriceData = [...product.priceData].sort((a, b) => a.price - b.price)
    const lowestPrice = sortedPriceData[0]
    const generated = generateHistoricalData(
      product.priceData.map((p) => p.shop),
      lowestPrice.price
    )
    console.log('[Chart Debug] Generated data:', generated)
    return generated
  }, [product])
  
  const heatmapData = useMemo(() => {
    if (!product) return []
    
    // Use API data if available
    if (product.heatmapData && product.heatmapData.length > 0) {
      return product.heatmapData
    }
    
    // Fallback to generated mock data
    const sortedPriceData = [...product.priceData].sort((a, b) => a.price - b.price)
    const lowestPrice = sortedPriceData[0]
    return generateHeatmapData(
      product.priceData.map((p) => p.shop),
      lowestPrice.price
    )
  }, [product])
  
  const priceDistribution = useMemo(() => {
    if (!product) return []
    return generatePriceDistribution(product.priceData)
  }, [product])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{error || 'Proizvod nije pronađen'}</h1>
          <button 
            onClick={() => router.push("/")} 
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            Povratak na početnu
          </button>
        </div>
      </div>
    )
  }

  // Use API analytics if available, otherwise calculate manually
  const sortedPriceData = [...product.priceData].sort((a, b) => a.price - b.price)
  const lowestPrice = product.priceAnalytics?.currentLowest || sortedPriceData[0]
  const highestPrice = product.priceAnalytics?.currentHighest || sortedPriceData[sortedPriceData.length - 1]
  const averagePrice = product.priceAnalytics?.currentAverage || Math.floor(
    product.priceData.reduce((sum, data) => sum + data.price, 0) / product.priceData.length
  )
  const priceDifference = product.priceAnalytics?.priceDifference || (highestPrice.price - lowestPrice.price)
  const priceVariancePercent = product.priceAnalytics?.priceVariancePercent?.toFixed(2) || 
    ((priceDifference / lowestPrice.price) * 100).toFixed(2)
  
  const lastUpdate = product.metadata?.lastScrapeTime 
    ? new Date(product.metadata.lastScrapeTime).toLocaleString('sr-RS')
    : 'Nepoznato'

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition mb-3 sm:mb-4 text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span>Nazad na katalog</span>
          </button>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
            <div className="relative w-full md:w-48 h-40 sm:h-48 bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden border border-border">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex-1 w-full">
              <div className="inline-block bg-primary text-primary-foreground px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold mb-2">
                {product.purity}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-sm sm:text-base text-foreground/60 mb-3 sm:mb-4">{product.description}</p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Clock size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Poslednje ažuriranje: {lastUpdate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20">
            <div className="flex items-center gap-2 text-primary mb-2">
              <TrendingDown size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Najniža cena</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">{lowestPrice.price.toLocaleString("sr-RS")} RSD</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">{lowestPrice.shop}</div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 sm:p-6 border border-accent/20">
            <div className="flex items-center gap-2 text-accent mb-2">
              <BarChart3 size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Prosečna cena</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">{averagePrice.toLocaleString("sr-RS")} RSD</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Srednja vrednost</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/20">
            <div className="flex items-center gap-2 text-orange-500 mb-2">
              <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Najviša cena</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">{highestPrice.price.toLocaleString("sr-RS")} RSD</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">{highestPrice.shop}</div>
          </div>

          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl p-4 sm:p-6 border border-border">
            <div className="flex items-center gap-2 text-foreground/70 mb-2">
              <Store size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Razlika</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">{priceDifference.toLocaleString("sr-RS")} RSD</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">{priceVariancePercent}% varijacija</div>
          </div>
        </div>

        {/* Price List Section */}
        <div className="bg-card rounded-xl border border-border p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Store className="text-primary" size={20} />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Cene po prodavnicama</h2>
          </div>
          <div className="space-y-3">
            {sortedPriceData.map((data, idx) => {
              const isLowest = data.price === lowestPrice.price
              const isHighest = data.price === highestPrice.price
              const isExpanded = expandedShop === idx
              
              // Use API shop historical data if available, otherwise generate mock
              const apiShopData = product.shopHistoricalData?.find(sh => sh.shop === data.shop)
              const shopHistory = apiShopData?.dataPoints || generateShopHistory(data.shop, data.price)
              
              return (
                <div
                  key={idx}
                  className={`rounded-xl transition border overflow-hidden ${
                    isLowest
                      ? "bg-primary/10 border-primary/40"
                      : isHighest
                        ? "bg-orange-500/10 border-orange-500/40"
                        : "bg-muted/30 border-border/50"
                  }`}
                >
                  <div
                    onClick={() => setExpandedShop(isExpanded ? null : idx)}
                    className={`flex items-start sm:items-center justify-between p-3 sm:p-5 cursor-pointer transition ${
                      isLowest
                        ? "hover:bg-primary/15"
                        : isHighest
                          ? "hover:bg-orange-500/15"
                          : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0"
                        style={{ backgroundColor: shopColors[data.shop] || "#888" }}
                      >
                        <span className="text-sm sm:text-base">{idx + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-semibold text-foreground text-base sm:text-lg truncate">{data.shop}</span>
                          {isLowest && (
                            <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold whitespace-nowrap w-fit">
                              NAJBOLJA
                            </span>
                          )}
                          {isHighest && (
                            <span className="bg-orange-500 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold whitespace-nowrap w-fit">
                              NAJVIŠA
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                          Ažurirano pre: {data.updatedAt}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
                      <div className="text-right">
                        <div className="text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">{data.price.toLocaleString("sr-RS")} RSD</div>
                        {data.pricePerGram && (
                          <div className="text-xs sm:text-sm text-muted-foreground mt-1 whitespace-nowrap">
                            {data.pricePerGram.toLocaleString("sr-RS", { maximumFractionDigits: 2 })} RSD/г
                          </div>
                        )}
                      </div>
                      <div className="text-muted-foreground">
                        {isExpanded ? <ChevronUp size={20} className="sm:w-6 sm:h-6" /> : <ChevronDown size={20} className="sm:w-6 sm:h-6" />}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Chart Section */}
                  {isExpanded && (
                    <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-2 border-t border-border/30 animate-in slide-in-from-top-2 duration-300">
                      <div className="bg-card/50 rounded-lg p-2 sm:p-3 border border-border/50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2">
                          <h4 className="text-[10px] sm:text-xs font-semibold text-foreground flex items-center gap-1 sm:gap-2">
                            <BarChart3 size={12} className="text-primary sm:w-3.5 sm:h-3.5" />
                            <span className="hidden sm:inline">Istorija cena - {(shopView[idx] || "line") === "line" ? "Poslednja 3 meseca" : "Cela godina"}</span>
                            <span className="sm:hidden">Istorija</span>
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <button
                                onClick={() => setShopView({ ...shopView, [idx]: "line" })}
                                className={`px-2 py-1 rounded text-[10px] font-medium transition ${
                                  (shopView[idx] || "line") === "line"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-foreground/60 hover:text-foreground"
                                }`}
                              >
                                Line
                              </button>
                              <button
                                onClick={() => setShopView({ ...shopView, [idx]: "heatmap" })}
                                className={`px-2 py-1 rounded text-[10px] font-medium transition ${
                                  shopView[idx] === "heatmap"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-foreground/60 hover:text-foreground"
                                }`}
                              >
                                Heatmap
                              </button>
                            </div>
                            {(shopView[idx] || "line") === "line" && (
                              <div className="text-[9px] sm:text-xs text-muted-foreground hidden sm:block">
                                {shopHistory[0].date} - {shopHistory[shopHistory.length - 1].date}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {(shopView[idx] || "line") === "line" ? (
                          <ResponsiveContainer width="100%" height={150} className="sm:!h-[180px]">
                            <ComposedChart 
                              data={shopHistory}
                              margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
                            >
                              <defs>
                                <linearGradient id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor={shopColors[data.shop] || "#888"} stopOpacity={0.4} />
                                  <stop offset="95%" stopColor={shopColors[data.shop] || "#888"} stopOpacity={0.05} />
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                              <XAxis 
                                dataKey="date" 
                                stroke="hsl(var(--muted-foreground))" 
                                fontSize={9}
                                interval={4}
                                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                              />
                              <YAxis 
                                stroke="hsl(var(--muted-foreground))" 
                                fontSize={9}
                                domain={['dataMin - 100', 'dataMax + 100']}
                                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: "hsl(var(--card))",
                                  border: "1px solid hsl(var(--border))",
                                  borderRadius: "6px",
                                  fontSize: "11px",
                                  padding: "6px 8px",
                                }}
                                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: "600", fontSize: "10px" }}
                                formatter={(value: any, name: string) => {
                                  if (name === "high") return [`${Number(value).toLocaleString("sr-RS")} RSD`, "Najviša"]
                                  if (name === "low") return [`${Number(value).toLocaleString("sr-RS")} RSD`, "Najniža"]
                                  return [`${Number(value).toLocaleString("sr-RS")} RSD`, "Cena"]
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="price"
                                stroke={shopColors[data.shop] || "#888"}
                                strokeWidth={2}
                                fill={`url(#gradient-${idx})`}
                                animationDuration={800}
                                dot={{ r: 2, fill: shopColors[data.shop] || "#888", strokeWidth: 0 }}
                                activeDot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
                              />
                              <Line
                                type="monotone"
                                dataKey="high"
                                stroke={shopColors[data.shop] || "#888"}
                                strokeWidth={1}
                                strokeOpacity={0.3}
                                dot={false}
                                strokeDasharray="2 2"
                              />
                              <Line
                                type="monotone"
                                dataKey="low"
                                stroke={shopColors[data.shop] || "#888"}
                                strokeWidth={1}
                                strokeOpacity={0.3}
                                dot={false}
                                strokeDasharray="2 2"
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                        ) : (
                          <div>
                            {/* Heatmap for this shop */}
                            {(() => {
                              const shopHeatmap = heatmapData.filter(d => d.shop === data.shop)
                              const weeks = Math.ceil(shopHeatmap.length / 7)
                              
                              // Get top 3 lowest and highest prices
                              const sortedByPrice = [...shopHeatmap].sort((a, b) => a.price - b.price)
                              const lowestPrices = sortedByPrice.slice(0, 3)
                              const highestPrices = sortedByPrice.slice(-3).reverse()
                              
                              return (
                                <div className="w-full flex gap-3">
                                  {/* Heatmap grid - Left side */}
                                  <div className="flex-1 overflow-x-auto pb-2">
                                    <div className="flex gap-0.5 min-w-max h-[140px] items-center">
                                      {Array.from({ length: weeks }).map((_, weekIdx) => (
                                        <div key={weekIdx} className="flex flex-col gap-0.5">
                                          {Array.from({ length: 7 }).map((_, dayIdx) => {
                                            const dataPoint = shopHeatmap.find(
                                              d => d.week === weekIdx && d.day === dayIdx
                                            )
                                            
                                            if (!dataPoint) {
                                              return <div key={dayIdx} className="w-2.5 h-2.5"></div>
                                            }
                                            
                                            const intensityClass = 
                                              dataPoint.intensity === 1 ? "bg-primary/20 border-primary/30" :
                                              dataPoint.intensity === 2 ? "bg-primary/40 border-primary/50" :
                                              dataPoint.intensity === 3 ? "bg-primary/60 border-primary/70" :
                                              dataPoint.intensity === 4 ? "bg-primary/80 border-primary" : "bg-muted/40 border-border"
                                            
                                            return (
                                              <div
                                                key={dayIdx}
                                                className={`w-2.5 h-2.5 rounded-sm border ${intensityClass} hover:ring-1 hover:ring-primary hover:scale-110 cursor-pointer transition-all duration-150 relative`}
                                                onMouseEnter={(e) => handleCellMouseEnter(e, data.shop, dataPoint.date, dataPoint.price)}
                                                onMouseLeave={handleCellMouseLeave}
                                              ></div>
                                            )
                                          })}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Price extremes - Right side */}
                                  <div className="w-[200px] flex-shrink-0">
                                    <div className="grid grid-cols-2 gap-2 text-[10px] h-full">
                                      {/* Lowest prices */}
                                      <div className="flex flex-col">
                                        <div className="flex items-center gap-1 mb-1.5">
                                          <TrendingDown className="w-3 h-3 text-green-500" />
                                          <h6 className="text-[10px] font-semibold text-green-600 dark:text-green-400">Najniže</h6>
                                        </div>
                                        <div className="space-y-1.5 flex-1">
                                          {lowestPrices.map((item, i) => (
                                            <div key={i} className="flex flex-col gap-0.5 text-[9px] bg-green-50 dark:bg-green-950/20 rounded px-2 py-1">
                                              <span className="text-muted-foreground">
                                                {new Date(item.date).toLocaleDateString('sr-RS', { day: 'numeric', month: 'short' })}
                                              </span>
                                              <span className="font-bold text-green-600 dark:text-green-400">
                                                {item.price.toLocaleString("sr-RS")} RSD
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      {/* Highest prices */}
                                      <div className="flex flex-col">
                                        <div className="flex items-center gap-1 mb-1.5">
                                          <TrendingUp className="w-3 h-3 text-red-500" />
                                          <h6 className="text-[10px] font-semibold text-red-600 dark:text-red-400">Najviše</h6>
                                        </div>
                                        <div className="space-y-1.5 flex-1">
                                          {highestPrices.map((item, i) => (
                                            <div key={i} className="flex flex-col gap-0.5 text-[9px] bg-red-50 dark:bg-red-950/20 rounded px-2 py-1">
                                              <span className="text-muted-foreground">
                                                {new Date(item.date).toLocaleDateString('sr-RS', { day: 'numeric', month: 'short' })}
                                              </span>
                                              <span className="font-bold text-red-600 dark:text-red-400">
                                                {item.price.toLocaleString("sr-RS")} RSD
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })()}
                          </div>
                        )}
                        
                        {/* Mini Stats */}
                        {(() => {
                          // Use API statistics if available, otherwise calculate from shopHistory
                          const shopStats = apiShopData?.statistics || {
                            lowest: Math.min(...shopHistory.map(h => h.price)),
                            average: Math.floor(shopHistory.reduce((sum, h) => sum + h.price, 0) / shopHistory.length),
                            highest: Math.max(...shopHistory.map(h => h.price)),
                            variance: Math.max(...shopHistory.map(h => h.price)) - Math.min(...shopHistory.map(h => h.price))
                          }
                          
                          return (
                            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border/30">
                              <div className="bg-emerald-500/10 rounded-lg p-1.5 sm:p-2 border border-emerald-500/30">
                                <div className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mb-0.5">Najniža</div>
                                <div className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                  {shopStats.lowest.toLocaleString("sr-RS")} RSD
                                </div>
                              </div>
                              <div className="bg-blue-500/10 rounded-lg p-1.5 sm:p-2 border border-blue-500/30">
                                <div className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-medium mb-0.5">Prosečna</div>
                                <div className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400">
                                  {shopStats.average.toLocaleString("sr-RS")} RSD
                                </div>
                              </div>
                              <div className="bg-red-500/10 rounded-lg p-1.5 sm:p-2 border border-red-500/30">
                                <div className="text-[9px] sm:text-[10px] text-red-600 dark:text-red-400 font-medium mb-0.5">Najviša</div>
                                <div className="text-[10px] sm:text-xs font-bold text-red-600 dark:text-red-400">
                                  {shopStats.highest.toLocaleString("sr-RS")} RSD
                                </div>
                              </div>
                              <div className="bg-purple-500/10 rounded-lg p-1.5 sm:p-2 border border-purple-500/30">
                                <div className="text-[9px] sm:text-[10px] text-purple-600 dark:text-purple-400 font-medium mb-0.5">Razlika</div>
                                <div className="text-[10px] sm:text-xs font-bold text-purple-600 dark:text-purple-400">
                                  {shopStats.variance.toLocaleString("sr-RS")} RSD
                                </div>
                              </div>
                            </div>
                          )
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Charts Section */}
        <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <BarChart3 className="text-primary" size={20} />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Analitika cena</h2>
          </div>

          {/* Chart Tabs */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 border-b border-border pb-3 sm:pb-4">
            <button
              onClick={() => setActiveChart("history")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                activeChart === "history"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-foreground/70 hover:bg-muted/80"
              }`}
            >
              <span className="hidden sm:inline">Istorija cena (12 meseci)</span>
              <span className="sm:hidden">Istorija</span>
            </button>
            <button
              onClick={() => setActiveChart("distribution")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                activeChart === "distribution"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-foreground/70 hover:bg-muted/80"
              }`}
            >
              <span className="hidden sm:inline">Distribucija cena</span>
              <span className="sm:hidden">Distribucija</span>
            </button>
            <button
              onClick={() => setActiveChart("perGram")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                activeChart === "perGram"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-foreground/70 hover:bg-muted/80"
              }`}
            >
              <span className="hidden sm:inline">Cena po gramu</span>
              <span className="sm:hidden">Po gramu</span>
            </button>
          </div>

          {/* Historical Price Chart */}
          {activeChart === "history" && (
            <div className="bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground">
                  <span className="hidden sm:inline">Istorija cena po prodavnicama</span>
                  <span className="sm:hidden">Istorija cena</span>
                </h3>
              </div>
              
              <div className="max-h-[700px] overflow-y-auto">
                {historicalData.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Nema dostupnih podataka za prikaz</p>
                  </div>
                )}
                {historicalData.length > 0 && (
                  <ResponsiveContainer width="100%" height={400} className="sm:!h-[600px]">
                <LineChart data={historicalData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))" 
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    domain={['dataMin - 200', 'dataMax + 200']}
                    style={{ fontSize: '12px', fontWeight: 500 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null
                      
                      // Find the lowest price in this month's data
                      const monthPrices = payload.map((p: any) => p.value)
                      const minPriceInMonth = Math.min(...monthPrices)
                      
                      return (
                        <div style={{
                          backgroundColor: "rgba(255, 255, 255, 0.98)",
                          border: "2px solid hsl(var(--border))",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                          backdropFilter: "blur(10px)",
                        }}>
                          <div style={{ 
                            color: "hsl(var(--foreground))", 
                            fontWeight: "700",
                            fontSize: "13px",
                            marginBottom: "8px",
                            paddingBottom: "6px",
                            borderBottom: "1px solid hsl(var(--border))"
                          }}>
                            {label}
                          </div>
                          {payload.map((entry: any, index: number) => {
                            const isLowest = entry.value === minPriceInMonth
                            return (
                              <div key={index} style={{
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
                                marginBottom: "3px",
                              }}>
                                <span style={{
                                  width: "12px",
                                  height: "12px",
                                  backgroundColor: entry.stroke,
                                  borderRadius: "50%",
                                  display: "inline-block",
                                  border: "2px solid white",
                                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                }}></span>
                                <span style={{ flex: 1 }}>{entry.name}</span>
                                <span style={{ fontWeight: "700" }}>{Number(entry.value).toLocaleString("sr-RS")} RSD</span>
                                {isLowest && <span style={{ fontSize: "14px" }}>🏆</span>}
                              </div>
                            )
                          })}
                        </div>
                      )
                    }}
                    cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 2, strokeDasharray: "5 5" }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="line"
                  />
                  {product.priceData.map((data, idx) => (
                    <Line
                      key={data.shop}
                      type="monotone"
                      dataKey={data.shop}
                      stroke={shopColors[data.shop] || "#8B8B8B"}
                      strokeWidth={4}
                      dot={{ r: 5, fill: shopColors[data.shop] || "#8B8B8B", strokeWidth: 2, stroke: "#fff" }}
                      activeDot={{ r: 8, strokeWidth: 3, stroke: "#fff" }}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
                )}
                </div>
            </div>
          )}

          {/* Price Distribution Chart */}
          {activeChart === "distribution" && (
            <div className="bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50">
              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Distribucija trenutnih cena</h3>
              <div className="max-h-[500px] overflow-y-auto">
                <ResponsiveContainer width="100%" height={300} className="sm:!h-[450px]">
                <BarChart data={priceDistribution} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis 
                    dataKey="shop" 
                    stroke="hsl(var(--muted-foreground))" 
                    angle={-15} 
                    textAnchor="end" 
                    height={80}
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    domain={['dataMin - 300', 'dataMax + 300']}
                    style={{ fontSize: '12px', fontWeight: 500 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null
                      
                      const prices = priceDistribution.map(p => p.price)
                      const minPrice = Math.min(...prices)
                      
                      return (
                        <div style={{
                          backgroundColor: "rgba(255, 255, 255, 0.98)",
                          border: "2px solid hsl(var(--border))",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                          backdropFilter: "blur(10px)",
                        }}>
                          <div style={{ 
                            color: "hsl(var(--foreground))", 
                            fontWeight: "700",
                            fontSize: "13px",
                            marginBottom: "8px",
                            paddingBottom: "6px",
                            borderBottom: "1px solid hsl(var(--border))"
                          }}>
                            {label}
                          </div>
                          {payload.map((entry: any, index: number) => {
                            const isLowest = entry.value === minPrice
                            return (
                              <div key={index} style={{
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
                                marginBottom: "3px",
                              }}>
                                <span style={{
                                  width: "12px",
                                  height: "12px",
                                  backgroundColor: entry.fill || entry.stroke,
                                  borderRadius: "50%",
                                  display: "inline-block",
                                  border: "2px solid white",
                                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                }}></span>
                                <span style={{ flex: 1 }}>{entry.name}</span>
                                <span style={{ fontWeight: "700" }}>{Number(entry.value).toLocaleString("sr-RS")} RSD</span>
                                {isLowest && <span style={{ fontSize: "14px" }}>🏆</span>}
                              </div>
                            )
                          })}
                        </div>
                      )
                    }}
                    cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                  />
                  {priceDistribution.map((entry, index) => (
                    <Bar
                      key={`bar-${index}`}
                      dataKey="price"
                      fill={shopColors[entry.shop] || "hsl(var(--primary))"}
                      radius={[12, 12, 0, 0]}
                      label={{ 
                        position: "top", 
                        fill: "hsl(var(--foreground))",
                        fontSize: 12,
                        fontWeight: 600,
                        formatter: (value: any) => `${Number(value).toLocaleString("sr-RS")} RSD`
                      }}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Price Per Gram Chart */}
          {activeChart === "perGram" && (
            <div className="bg-muted/20 rounded-xl p-3 sm:p-6 border border-border/50">
              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Cena po gramu - Poređenje</h3>
              <div className="max-h-[500px] overflow-y-auto">
                <ResponsiveContainer width="100%" height={300} className="sm:!h-[450px]">
                <ComposedChart data={priceDistribution} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="perGramGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis 
                    dataKey="shop" 
                    stroke="hsl(var(--muted-foreground))" 
                    angle={-15} 
                    textAnchor="end" 
                    height={80}
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    domain={['dataMin - 50', 'dataMax + 50']}
                    style={{ fontSize: '12px', fontWeight: 500 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null
                      
                      const pricesPerGram = priceDistribution.map(p => p.pricePerGram)
                      const minPricePerGram = Math.min(...pricesPerGram)
                      const currentShop = priceDistribution.find(p => p.shop === label)
                      
                      if (!currentShop) return null
                      
                      const isLowest = currentShop.pricePerGram === minPricePerGram
                      
                      return (
                        <div style={{
                          backgroundColor: "rgba(255, 255, 255, 0.98)",
                          border: "2px solid hsl(var(--border))",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                          backdropFilter: "blur(10px)",
                        }}>
                          <div style={{ 
                            color: "hsl(var(--foreground))", 
                            fontWeight: "700",
                            fontSize: "13px",
                            marginBottom: "8px",
                            paddingBottom: "6px",
                            borderBottom: "1px solid hsl(var(--border))"
                          }}>
                            {label}
                          </div>
                          <div style={{
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
                          }}>
                            <span style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: "hsl(var(--primary))",
                              borderRadius: "50%",
                              display: "inline-block",
                              border: "2px solid white",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                            }}></span>
                            <span style={{ flex: 1 }}>Cena po gramu</span>
                            <span style={{ fontWeight: "700" }}>{Number(currentShop.pricePerGram).toLocaleString("sr-RS")} RSD/г</span>
                            {isLowest && <span style={{ fontSize: "14px" }}>🏆</span>}
                          </div>
                        </div>
                      )
                    }}
                    cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pricePerGram"
                    stroke="hsl(var(--primary))"
                    fill="url(#perGramGradient)"
                    strokeWidth={4}
                    dot={{ r: 6, fill: "hsl(var(--primary))", strokeWidth: 3, stroke: "#fff" }}
                    activeDot={{ r: 9, strokeWidth: 4, stroke: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pricePerGram"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={false}
                  />
                  {priceDistribution.map((entry, index) => (
                    <Bar
                      key={`indicator-${index}`}
                      dataKey="pricePerGram"
                      fill={shopColors[entry.shop] || "hsl(var(--primary))"}
                      fillOpacity={0.2}
                      radius={[8, 8, 0, 0]}
                    />
                  ))}
                </ComposedChart>
              </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Custom Heatmap Tooltip */}
      {hoveredCell && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y - 10}px`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="bg-card border-2 border-primary shadow-2xl rounded-lg p-3 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center gap-2 mb-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: shopColors[hoveredCell.shop] || "#888" }}
              ></div>
              <span className="font-bold text-sm text-foreground">{hoveredCell.shop}</span>
            </div>
            <div className="text-xs text-muted-foreground mb-1">
              {new Date(hoveredCell.date).toLocaleDateString('sr-RS', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
            <div className="text-lg font-bold text-primary">
              {hoveredCell.price.toLocaleString("sr-RS")} RSD
            </div>
          </div>
          {/* Arrow */}
          <div className="w-3 h-3 bg-card border-r-2 border-b-2 border-primary absolute left-1/2 -translate-x-1/2 -bottom-1.5 rotate-45"></div>
        </div>
      )}
    </div>
  )
}

