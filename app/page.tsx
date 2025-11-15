import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import AnalyticsSection from "@/components/analytics-section"
import MarketBanner from "@/components/market-banner"
import FAQSection from "@/components/faq-section"
import AboutGoldSection from "@/components/about-gold-section"
import MarketTrendsSection from "@/components/market-trends-section"
import PriceHistorySection from "@/components/price-history-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      <MarketBanner />
      <PriceHistorySection />
      <AnalyticsSection />
      <MarketTrendsSection />
      <AboutGoldSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
