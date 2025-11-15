"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import { fetchProducts } from "@/lib/api-service"
import type { ProductListItem } from "@/types/api-types"

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("all")
  const [products, setProducts] = useState<ProductListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "Sve Poluge", weights: [] },
    { id: "1-10", label: "1g - 10g", weights: ["1g", "5g", "10g"] },
    { id: "20-50", label: "20g - 50g", weights: ["20g", "50g"] },
    { id: "100", label: "100g", weights: ["100g"] },
  ]

  // Fetch products from API
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetchProducts({ 
          category: 'all',
          sortBy: 'updated_desc',
          page: 1,
          limit: 50
        })
        setProducts(response.data.products)
      } catch (err) {
        console.error('Failed to load products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => categories.find((c) => c.id === activeTab)?.weights.includes(p.weight))

  return (
    <section id="proizvodi" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">Naš Katalog</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Pronađite savršenu polugu zlata za vašu investiciju. Cene azurirane u realnom vremenu.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === category.id
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${0.15 + index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* No Products */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nema proizvoda za prikaz.</p>
          </div>
        )}
      </div>
    </section>
  )
}
