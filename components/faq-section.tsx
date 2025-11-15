"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Šta je čistoća zlata i zašto je važna?",
    answer:
      "Čistoća zlata se meri u finessima. Zlato od 99.9% znači da je 99.9% čistog zlata. Viša čistoća znači bolju vrednost i bolju investiciju.",
  },
  {
    question: "Kako su određene cene na sajtu?",
    answer:
      "Cene se azuriraju u realnom vremenu direktno od registrovanih prodavnica. Prikazujemo najnižu, prosečnu i najveću cenu.",
  },
  {
    question: "Da li je sigurno kupovati zlato online?",
    answer:
      "Preporučujemo kupovanje samo od verifikovanih prodavnica. Sve prodavnice na našem sajtu su licencirane i regulisane.",
  },
  {
    question: "Koja je najbolja investicija za početnike?",
    answer: "Za početnike preporučujemo poluge od 1g do 10g jer su affordable i lako se prosledi sa lakšim količinama.",
  },
  {
    question: "Kako da znam da je moje zlato originalno?",
    answer:
      "Sertifikati autentičnosti dolaze sa svakom polugom. Možete tražiti od prodavnice testiranje zlata pre kupovine.",
  },
  {
    question: "Koja je najbolja vremenska tačka za kupovinu zlata?",
    answer:
      "Zlato je dugoročna investicija. Umesto da pokušavate da bacite vreme, fokusirajte se na redovnu akumulaciju tokom vremena.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Često Postavljena Pitanja</h2>
          <p className="text-foreground/60">Odgovori na najčešće pitanja investitora</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer transition-all hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${0.05 + index * 0.08}s` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-amber-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && <div className="px-6 pb-6 pt-0 text-foreground/70 border-t">{faq.answer}</div>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
