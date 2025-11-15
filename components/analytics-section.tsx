"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Card } from "@/components/ui/card"

const monthlyData = [
  { month: "Jan", price: 2500, volume: 45 },
  { month: "Feb", price: 2600, volume: 52 },
  { month: "Mar", price: 2700, volume: 48 },
  { month: "Apr", price: 2750, volume: 61 },
  { month: "May", price: 2680, volume: 55 },
  { month: "Jun", price: 2800, volume: 67 },
  { month: "Jul", price: 2850, volume: 72 },
  { month: "Aug", price: 2900, volume: 78 },
  { month: "Sep", price: 2950, volume: 85 },
  { month: "Oct", price: 3000, volume: 92 },
  { month: "Nov", price: 3050, volume: 88 },
  { month: "Dec", price: 3100, volume: 95 },
]

const marketShareData = [
  { name: "GoldShop.rs", value: 35 },
  { name: "MetalStore.com", value: 28 },
  { name: "Аурум.rs", value: 37 },
]

const COLORS = ["#f59e0b", "#d97706", "#b45309"]

export default function AnalyticsSection() {
  return (
    <section className="py-20 bg-foreground/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trend cena */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-6">Trend Cena - 12 Meseci</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.5)" />
                <YAxis stroke="rgba(0,0,0,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", border: "1px solid #f59e0b" }} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ fill: "#f59e0b", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-6">Obim Prodaje</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.5)" />
                <YAxis stroke="rgba(0,0,0,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", border: "1px solid #d97706" }} />
                <Bar dataKey="volume" fill="#d97706" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Tržišni udeo */}
        <Card className="p-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Tržišni Udeo po Prodavnici</h3>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full lg:w-2/3 space-y-4">
              {marketShareData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: COLORS[idx] }}></div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-foreground/60">{item.value}% tržišnog udela</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
