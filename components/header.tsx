"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23D4AF37" strokeWidth="0.5" opacity="0.3"/></pattern><linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23FFD700;stop-opacity:0.2" /><stop offset="100%" style="stop-color:%23FFA500;stop-opacity:0.1" /></linearGradient></defs><rect width="1200" height="120" fill="url(%23goldGradient)"/><rect width="1200" height="120" fill="url(%23grid)"/></svg>\')',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">✦</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">AuriVM</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition">
              Početna
            </Link>
            <Link href="#proizvodi" className="text-sm text-foreground/70 hover:text-accent transition">
              Proizvodi
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-accent transition">
              O zlatu
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-accent transition">
              Kontakt
            </Link>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition">
              Početna
            </Link>
            <Link href="#proizvodi" className="text-sm text-foreground/70 hover:text-accent transition">
              Proizvodi
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-accent transition">
              O zlatu
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-accent transition">
              Kontakt
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
