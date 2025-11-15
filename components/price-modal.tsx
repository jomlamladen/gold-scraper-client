"use client"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchProductDetail } from "@/lib/api-service"
import type { ProductDetail } from "@/types/api-types"

interface PriceModalProps {
  isOpen: boolean
  onClose: () => void
  productId: string  // MongoDB ObjectId as string
  productName: string
  weight: string
}

export default function PriceModal({ isOpen, onClose, productId, productName, weight }: PriceModalProps) {
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch product detail when modal opens
  useEffect(() => {
    if (isOpen && !product) {
      async function loadProduct() {
        try {
          setLoading(true)
          setError(null)
          const response = await fetchProductDetail(productId)
          setProduct(response.data)
        } catch (err) {
          console.error('Failed to load product detail:', err)
          setError('Failed to load product details')
        } finally {
          setLoading(false)
        }
      }
      loadProduct()
    }
  }, [isOpen, productId, product])

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sortedData = product ? [...product.priceData].sort((a, b) => a.price - b.price) : []
  const lowestPrice = sortedData.length > 0 ? sortedData[0].price : 0
  const highestPrice = sortedData.length > 0 ? sortedData[sortedData.length - 1].price : 0

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] sm:w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-xl sm:rounded-2xl">
        <div className="bg-card shadow-2xl border border-border">
          <div className="sticky top-0 bg-gradient-to-r from-primary/10 to-accent/10 px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-border rounded-t-xl sm:rounded-t-2xl">
            <div className="flex-1 min-w-0 pr-2">
              <h2 className="text-lg sm:text-2xl font-semibold text-foreground truncate">{productName}</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{weight} - Sve dostupne cene</p>
            </div>
            <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-muted rounded-lg transition flex-shrink-0">
              <X size={18} className="sm:w-5 sm:h-5 text-foreground" />
            </button>
          </div>

          <div className="px-4 sm:px-6 py-4 sm:py-5">
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p className="text-muted-foreground">Loading prices...</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-12">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                >
                  Close
                </button>
              </div>
            )}

            {/* Content */}
            {!loading && !error && product && (
              <>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-primary/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center border border-primary/20">
                <div className="text-[9px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Najniža cena</div>
                <div className="text-lg sm:text-3xl font-bold text-primary mt-1 sm:mt-2">{lowestPrice.toLocaleString("sr-RS")} RSD</div>
              </div>
              <div className="bg-accent/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center border border-accent/20">
                <div className="text-[9px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Razlika</div>
                <div className="text-lg sm:text-3xl font-bold text-accent mt-1 sm:mt-2">
                  {(highestPrice - lowestPrice).toLocaleString("sr-RS")} RSD
                </div>
              </div>
              <div className="bg-muted/40 rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center border border-border/50">
                <div className="text-[9px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Najviša cena</div>
                <div className="text-lg sm:text-3xl font-bold text-foreground/70 mt-1 sm:mt-2">
                  {highestPrice.toLocaleString("sr-RS")} RSD
                </div>
              </div>
            </div>

            {/* Table View */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Cene po prodavnici
              </h3>
              {sortedData.map((data, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 sm:p-4 bg-muted/40 rounded-lg sm:rounded-xl hover:bg-muted/60 transition border border-border/50 hover:border-primary/30"
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="font-semibold text-sm sm:text-base text-foreground truncate">{data.shop}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Ažurirana: {data.updatedAt}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-base sm:text-lg font-bold text-primary whitespace-nowrap">{data.price.toLocaleString("sr-RS")} RSD</div>
                    {data.pricePerGram && (
                      <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 whitespace-nowrap">
                        {data.pricePerGram.toLocaleString("sr-RS", {
                          maximumFractionDigits: 2,
                        })}{" "}
                        RSD/г
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
