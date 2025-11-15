"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-card via-background to-background overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2 animate-fade-in-up">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Investirajte u{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-yellow-600">
                  Čisto Zlato
                </span>
              </h1>
              <p
                className="text-lg sm:text-xl text-foreground/60 max-w-2xl lg:max-w-none leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Pronađite najbolje cene zlatnih poluga. Poređenje cena iz više prodavnica u realnom vremenu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-8">
              <button
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                Pregledaj Proizvode
              </button>
              <button
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              >
                Nauči o Zlatu
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 text-center lg:text-left">
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <p className="text-sm text-foreground/60">Čistoća Zlata</p>
              </div>
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-primary">15+</div>
                <p className="text-sm text-foreground/60">Prodavnica</p>
              </div>
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <div className="text-3xl font-bold text-primary">Live</div>
                <p className="text-sm text-foreground/60">Cene</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 h-96">
            {/* Gold bars showcase */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition animate-float"
              style={{ animationDelay: "0s" }}
            >
              <img
                src="/gold-bars-precious-metal-ingots-close-up.jpg"
                alt="Zlatne poluge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Market/trading */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="/gold-market-trading-financial-charts-luxury.jpg"
                alt="Tržište zlata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Investment showcase */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src="/gold-coins-investment-wealth-precious-metals.jpg"
                alt="Investicija u zlato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Premium gold showcase */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition animate-float"
              style={{ animationDelay: "0.9s" }}
            >
              <img
                src="/premium-luxury-gold-jewelry-refined-precious.jpg"
                alt="Premium zlato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
