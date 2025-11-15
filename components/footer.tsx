import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">✦</span>
              </div>
              <span className="font-serif text-lg font-bold text-foreground">AuriVM</span>
            </div>
            <p className="text-sm text-foreground/60">Premium proizvođač i distributor čistog zlata za investitore.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Proizvodi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  Zlatne Poluge
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  Investicijski Saveti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  Certifikati
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Kompanija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-accent transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Društvene Mreže</h4>
            <div className="flex gap-3">
              <Link href="#" className="p-2 bg-muted rounded hover:bg-primary hover:text-primary-foreground transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded hover:bg-primary hover:text-primary-foreground transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded hover:bg-primary hover:text-primary-foreground transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; 2025 AuriVM. Sva prava zadržana.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition">
                Privatnost
              </Link>
              <Link href="#" className="hover:text-accent transition">
                Uslovi Korišćenja
              </Link>
              <Link href="#" className="hover:text-accent transition">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
