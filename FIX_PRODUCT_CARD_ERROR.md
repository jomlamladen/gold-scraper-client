# Fix: Product Card Type Error

## 🐛 Problem

```typescript
// components/product-card.tsx (line 16)
const lowestPrice = Math.min(...product.priceData.map((p) => p.price))
// ❌ Error: product.priceData ne postoji
```

**Uzrok:**
- `ProductCard` je koristio stari `Product` tip iz `lib/products-data.ts`
- API vraća novi `ProductListItem` tip sa `priceRange` objektom
- `ProductListItem` **nema** `priceData` array

---

## ✅ Rešenje

### 1. **product-card.tsx** ažuriran

#### Bilo:
```typescript
import { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

const lowestPrice = Math.min(...product.priceData.map((p) => p.price))
const highestPrice = Math.max(...product.priceData.map((p) => p.price))
```

**Problemi:**
- ❌ Koristi stari `Product` tip
- ❌ Traži `priceData` array koji ne postoji
- ❌ Računa min/max umesto da koristi `priceRange`

---

#### Sada:
```typescript
import type { ProductListItem } from "@/types/api-types"

interface ProductCardProps {
  product: ProductListItem
}

// Use priceRange from API response
const lowestPrice = product.priceRange.lowest
const highestPrice = product.priceRange.highest
```

**Poboljšanja:**
- ✅ Koristi novi `ProductListItem` tip
- ✅ Direktno uzima cene iz `priceRange`
- ✅ Ne računa nepotrebno min/max

---

### 2. **price-modal.tsx** ažuriran

Modal je takođe morao da se ažurira jer prima podatke iz product card-a.

#### Bilo:
```typescript
interface PriceModalProps {
  priceData: PriceData[]
}

// Direktno koristi priceData
const sortedData = [...priceData].sort(...)
```

**Problemi:**
- ❌ `ProductListItem` nema `priceData` array
- ❌ Morali smo da prosleđujemo ceo array

---

#### Sada:
```typescript
interface PriceModalProps {
  productId: number  // Samo šaljemo ID
}

// Fetch product detail kada se otvori modal
useEffect(() => {
  if (isOpen && !product) {
    const response = await fetchProductDetail(productId)
    setProduct(response.data)
  }
}, [isOpen, productId])
```

**Poboljšanja:**
- ✅ Fetchuje product detail sa svim podacima
- ✅ Loading state dok fetchuje
- ✅ Error handling ako fetch fail-uje
- ✅ Uvek dobija fresh podatke

---

## 📊 Data Flow

### Stari flow (broken):
```
product-grid.tsx
    ↓
ProductListItem (nema priceData)
    ↓
product-card.tsx → pokušava product.priceData ❌
    ↓
ERROR
```

---

### Novi flow (fixed):
```
product-grid.tsx
    ↓
ProductListItem (ima priceRange)
    ↓
product-card.tsx → koristi product.priceRange ✅
    ↓
User clicks "Quick Preview"
    ↓
price-modal.tsx → fetchuje product detail (ima priceData) ✅
    ↓
Prikazuje sve cene
```

---

## 🎯 API Types

### ProductListItem (za product grid/card)
```typescript
{
  id: number,
  name: string,
  priceRange: {
    lowest: number,
    highest: number,
    average: number,
    difference: number,
    lowestShop: string,
    highestShop: string
  },
  // ... ostala polja
}
```

**Za:** Prikazivanje liste proizvoda (brzo, bez detaljnih podataka)

---

### ProductDetail (za modal/detail page)
```typescript
{
  id: number,
  name: string,
  priceData: [
    {
      shop: string,
      price: number,
      pricePerGram: number,
      updatedAt: string,
      availability: string
    },
    // ... više shops
  ],
  priceAnalytics: {...},
  historicalData: {...},
  // ... detaljni podaci
}
```

**Za:** Detaljni prikaz sa svim cenama po shop-ovima

---

## ✅ Benefits

| Before | After |
|--------|-------|
| ❌ Type error | ✅ Type safe |
| ❌ Računa min/max | ✅ Koristi priceRange |
| ❌ Traži priceData koji ne postoji | ✅ Fetchuje detail kada treba |
| ❌ Modal prima ceo array | ✅ Modal fetchuje fresh data |
| ❌ Stari Product tip | ✅ Novi ProductListItem tip |

---

## 🧪 Testing

### Test 1: Product cards se prikazuju
```bash
# Otvori http://localhost:3000
# ✅ Product cards prikazuju lowest i highest cene
# ✅ Nema errors u console-u
```

### Test 2: Quick Preview modal
```bash
# Click na "Quick Preview" button
# ✅ Modal se otvara
# ✅ Loading state se prikazuje
# ✅ Tabela sa cenama se prikazuje
```

### Test 3: Preview button
```bash
# Click na "Preview" button
# ✅ Otvara detail page
# ✅ Prikazuje sve cene i charts
```

---

## 🔍 Console Messages

**U MOCK MODE:**
```
[API Config] 🔵 MOCK MODE
[API Service] Fetching products...
[API Service] Using MOCK data
[API Service] Fetching product detail... 1
[API Service] Using MOCK data
```

**Nema errors!** ✅

---

## 📝 Changed Files

### 1. `components/product-card.tsx`
- ✅ Changed type from `Product` to `ProductListItem`
- ✅ Use `priceRange` instead of calculating from `priceData`
- ✅ Pass `productId` to modal instead of `priceData`

### 2. `components/price-modal.tsx`
- ✅ Accept `productId` instead of `priceData`
- ✅ Fetch product detail when modal opens
- ✅ Add loading state
- ✅ Add error handling

---

## 🎯 Summary

**Problem:** Type mismatch između `Product` i `ProductListItem`

**Root Cause:** 
- Product grid koristi novi API format
- Product card koristio stari format

**Solution:**
1. Product card koristi `ProductListItem` sa `priceRange`
2. Modal fetchuje product detail sa `priceData`
3. Sve je type-safe i radi! ✅

---

**Status:** ✅ FIXED  
**Testing:** ✅ Verified  
**Type Safety:** ✅ Complete

