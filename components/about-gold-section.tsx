import { Card } from "@/components/ui/card"

export default function AboutGoldSection() {
  return (
    <section className="py-20 bg-foreground/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">O Zlatu kao Investiciji</h2>
          <p className="text-foreground/60">Praktični saveti za pametne investitore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow animate-slide-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{index === 0 ? "🏆" : index === 1 ? "📈" : "🛡️"}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {index === 0 ? "Bezbedan Rezerv" : index === 1 ? "Dugoročni Rast" : "Diverzifikacija"}
              </h3>
              <p className="text-foreground/70">
                {index === 0
                  ? "Zlato se ne može devaluirati kao papirnata valuta. Tokom istorije, zlato je zadržalo svoju vrednost kao bezbedan rezerv."
                  : index === 1
                    ? "Istorijski gledano, cena zlata raste tokom vremena. Idealno za dugoročne investitore koji očekuju inflaciju."
                    : "Zlato je odličan način da diverzifikujete svoj portfolio. Ne korelira sa akcijama i obveznicama."}
              </p>
            </Card>
          ))}
        </div>

        <div
          className="mt-12 bg-white rounded-lg border border-amber-200 p-8 animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Strategije Investiranja</h3>
          <ul className="space-y-4 text-foreground/70">
            <li className="flex gap-4">
              <span className="text-amber-500 font-bold">1.</span>
              <span>
                <strong>Dollar-Cost Averaging:</strong> Kupujte male količine zlata redovno umesto velikih iznosa
                odjednom.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-amber-500 font-bold">2.</span>
              <span>
                <strong>Hodla Strategija:</strong> Kupite i držite dugoročno, ne pokušavajte da bacite vreme na tržištu.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-amber-500 font-bold">3.</span>
              <span>
                <strong>Mešovita Portfolio:</strong> Kombinirajte različite veličine poluga za fleksibilnost.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-amber-500 font-bold">4.</span>
              <span>
                <strong>Sigurna Čuvanja:</strong> Čuvajte zlato u sefovima ili specijalizovanim depozitima.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
