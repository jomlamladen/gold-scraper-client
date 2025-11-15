import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const trends = [
  {
    title: "Svetske rezerve zlata",
    value: "51,238 tona",
    change: "+2.3%",
    trend: "up",
    icon: "🌍",
  },
  {
    title: "Prosečna godišnja potrošnja",
    value: "4,574 tona",
    change: "+1.8%",
    trend: "up",
    icon: "📊",
  },
  {
    title: "Zlatno rudarenje",
    value: "3,000+ tona/godišnje",
    change: "-0.5%",
    trend: "down",
    icon: "⛏️",
  },
  {
    title: "Investicije u zlato",
    value: "2,100+ tona/godišnje",
    change: "+5.2%",
    trend: "up",
    icon: "💎",
  },
]

export default function MarketTrendsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Svetski Trendovi Zlata</h2>
          <p className="text-foreground/60">Ključne statistike globalnog tržišta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, index) => (
            <Card
              key={index}
              className="p-6 relative overflow-hidden group hover:shadow-lg transition-all animate-scale-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="absolute -right-8 -top-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                {trend.icon}
              </div>
              <div className="relative z-10">
                <p className="text-sm text-foreground/60 mb-2">{trend.title}</p>
                <p className="text-3xl font-bold text-foreground mb-3">{trend.value}</p>
                <div className={`flex items-center gap-2 ${trend.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {trend.trend === "up" ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="font-semibold">{trend.change}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
