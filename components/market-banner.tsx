"use client"

export default function MarketBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center text-white animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <div className="text-4xl font-bold mb-2 animate-float">15,000+</div>
            <p className="text-amber-50">Transakcija Godišnje</p>
          </div>
          <div className="text-center text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold mb-2 animate-float" style={{ animationDelay: "0.3s" }}>
              99.9%
            </div>
            <p className="text-amber-50">Čistoća Zlata</p>
          </div>
          <div className="text-center text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold mb-2 animate-float" style={{ animationDelay: "0.6s" }}>
              24/7
            </div>
            <p className="text-amber-50">Live Cene i Podrška</p>
          </div>
        </div>
      </div>
    </section>
  )
}
