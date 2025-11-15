"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, ExternalLink } from "lucide-react"
import Link from "next/link"
import PriceModal from "./price-modal"
import type { ProductListItem } from "@/types/api-types"

interface ProductCardProps {
  product: ProductListItem
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Use priceRange from API response
  const lowestPrice = product.priceRange.lowest
  const highestPrice = product.priceRange.highest

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
        <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            {product.purity}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground line-clamp-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 space-y-3 border border-border/50">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Raspon cena</div>
            <div className="flex justify-between items-end gap-2">
              <div>
                <div className="text-xs text-muted-foreground">Najniža</div>
                <div className="text-xl font-bold text-primary">{lowestPrice.toLocaleString("sr-RS")} RSD</div>
              </div>
              <div className="text-xs text-muted-foreground">do</div>
              <div>
                <div className="text-xs text-muted-foreground">Najviša</div>
                <div className="text-lg font-semibold text-foreground">{highestPrice.toLocaleString("sr-RS")} RSD</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition font-medium text-sm"
            >
              <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Quick Preview</span>
              <span className="sm:hidden">Quick</span>
            </button>
            <Link
              href={`/products/${product.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm"
            >
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Preview</span>
            </Link>
          </div>
        </div>
      </div>

      <PriceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productId={product.id}
        productName={product.name}
        weight={product.weight}
      />
    </>
  )
}
