"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { USE_MOCK_DATA } from "@/lib/api-config"

interface GoldData {
  date: string
  price: number
  high: number
  low: number
}

export default function PriceHistorySection() {
  const [allTimeData, setAllTimeData] = useState<GoldData[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    currentPrice: 0,
    allTimeHigh: 0,
    allTimeLow: 0,
    avgPrice: 0,
  })

  useEffect(() => {
    const fetchGoldData = async () => {
      try {
        let currentPrice = 2050 // Default mock price
        
        if (USE_MOCK_DATA) {
          // MOCK MODE - Koristi mock podatke
          console.log('[Price History] Using MOCK data')
          currentPrice = 2050 // Mock cena zlata
        } else {
          // REAL API MODE - Pokušaj da fetchu ješ sa eksternog API-ja
          console.log('[Price History] Fetching from external API')
          try {
            const response = await fetch("https://api.metals.live/v1/spot/gold", {
              signal: AbortSignal.timeout(5000) // 5s timeout
            })
            if (response.ok) {
              const data = await response.json()
              currentPrice = data.gold || 2050
            } else {
              console.warn('[Price History] API returned non-ok status, using fallback')
            }
          } catch (apiError) {
            console.warn('[Price History] External API unavailable, using fallback data:', apiError)
            // Fallback na mock data ako API ne radi
          }
        }

        // Generisanje istorijskih podataka
        const historicalData = generateMockHistoricalData(currentPrice)
        setAllTimeData(historicalData)

        const prices = historicalData.map((d) => d.price)
        const highs = historicalData.map((d) => d.high)
        const lows = historicalData.map((d) => d.low)

        setStats({
          currentPrice: prices[prices.length - 1],
          allTimeHigh: Math.max(...highs),
          allTimeLow: Math.min(...lows),
          avgPrice: prices.reduce((a, b) => a + b, 0) / prices.length,
        })

        setLoading(false)
      } catch (error) {
        console.error("Greška pri učitavanju podataka zlata:", error)
        // Fallback na osnovne mock podatke
        const fallbackData = generateMockHistoricalData(2050)
        setAllTimeData(fallbackData)
        
        const prices = fallbackData.map((d) => d.price)
        const highs = fallbackData.map((d) => d.high)
        const lows = fallbackData.map((d) => d.low)
        
        setStats({
          currentPrice: prices[prices.length - 1],
          allTimeHigh: Math.max(...highs),
          allTimeLow: Math.min(...lows),
          avgPrice: prices.reduce((a, b) => a + b, 0) / prices.length,
        })
        
        setLoading(false)
      }
    }

    fetchGoldData()
  }, [])

  const generateMockHistoricalData = (currentPrice: number) => {
    const data: GoldData[] = []
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]

    let basePrice = currentPrice * 0.8

    for (let i = 0; i < 12; i++) {
      const variation = (Math.random() - 0.5) * 200
      const price = basePrice + variation

      data.push({
        date: months[i],
        price: Math.round(price * 100) / 100,
        high: Math.round((price + Math.random() * 100) * 100) / 100,
        low: Math.round((price - Math.random() * 100) * 100) / 100,
      })

      basePrice = price
    }

    return data
  }

  if (loading) {
    return <div className="py-12 text-center">Učitavanje podataka...</div>
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-foreground mb-2">Analiza Cena Zlata</h2>
        <p className="text-muted-foreground">All-time statistika i istorijske cene zlata</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardDescription>Trenutna Cena</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-600">${stats.currentPrice.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardDescription>All-Time High</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">${stats.allTimeHigh.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <CardDescription>All-Time Low</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">${stats.allTimeLow.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardDescription>Prosečna Cena</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">${stats.avgPrice.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trend Chart */}
        <Card className="animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle>Cena Zlata - Trend</CardTitle>
            <CardDescription>Mesečne cene poslednjih 12 meseci</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                price: {
                  label: "Cena",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={allTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-1))" name="Cena" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* High/Low Range Chart */}
        <Card className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <CardHeader>
            <CardTitle>Raspon Cena - High/Low</CardTitle>
            <CardDescription>Minimalna i maksimalna cena po mesecu</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                high: {
                  label: "Najviša",
                  color: "hsl(var(--chart-2))",
                },
                low: {
                  label: "Najniža",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={allTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="high" stroke="hsl(var(--chart-2))" name="Najviša" strokeWidth={2} />
                  <Line type="monotone" dataKey="low" stroke="hsl(var(--chart-3))" name="Najniža" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Area Chart - Distribution */}
        <Card className="lg:col-span-2 animate-scale-in" style={{ animationDelay: "0.7s" }}>
          <CardHeader>
            <CardTitle>Distribucija Cena - Area Prikaz</CardTitle>
            <CardDescription>Vizuelni prikaz oscilacije cena zlata</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                high: {
                  label: "Najviša",
                  color: "hsl(var(--chart-2))",
                },
                low: {
                  label: "Najniža",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={allTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="high"
                    fill="hsl(var(--chart-2))"
                    stroke="hsl(var(--chart-2))"
                    name="Najviša"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="low"
                    fill="hsl(var(--chart-3))"
                    stroke="hsl(var(--chart-3))"
                    name="Najniža"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
