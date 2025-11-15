# API Integration - Goldara

## 🎯 Pregled

Goldara aplikacija može da radi sa **mock podacima** ili **real backend API-jem**. Switching između njih je jednostavan - samo promeni jedan flag!

---

## 🔧 Kako switchovati između Mock i Real API-ja

### **Otvori:** `lib/api-config.ts`

```typescript
// 🔵 MOCK MODE (default)
export const USE_MOCK_DATA = true;

// 🟢 REAL API MODE
export const USE_MOCK_DATA = false;
```

**To je sve!** 🎉 Aplikacija će automatski koristiti odgovarajući izvor podataka.

---

## 📊 Šta se dešava kada promeniš flag

### MOCK MODE (`USE_MOCK_DATA = true`)

✅ **Koristi:**
- Mock podatke iz `lib/products-data.ts`
- Simulira API delay (300ms)
- Generiše mock historical data
- Ne zahteva backend server

✅ **Koristi za:**
- Development bez backend-a
- Testing UI komponenti
- Demo svrhe
- Kad backend nije dostupan

---

### REAL API MODE (`USE_MOCK_DATA = false`)

✅ **Koristi:**
- Real backend API na `http://localhost:5001`
- Prave podatke iz baze
- Real scraping results
- Live price updates

✅ **Koristi za:**
- Production
- Testing sa real podacima
- Integration testing
- QA

---

## 🌐 Backend Configuration

### API Endpoints

```typescript
// Backend URL (može se promeniti u .env)
API_BASE_URL = 'http://localhost:5001'

// Endpoints
GET /api/products              // Product list
GET /api/product/:id           // Product detail
```

### Environment Variables

Napravi `.env.local` fajl:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

---

## 🚀 Quick Start

### 1. Development sa Mock Podacima

```bash
# lib/api-config.ts
export const USE_MOCK_DATA = true;

# Start dev server
npm run dev

# Aplikacija radi bez backend-a! ✅
```

---

### 2. Development sa Real API-jem

```bash
# Pokreni backend
cd backend
python app.py  # ili kako god pokrećeš backend

# Backend radi na http://localhost:5001

# lib/api-config.ts
export const USE_MOCK_DATA = false;

# Start dev server
npm run dev

# Aplikacija fetchu je podatke sa backend-a! ✅
```

---

## 📁 Arhitektura

```
lib/
├── api-config.ts       # 🔧 Toggle ovde (USE_MOCK_DATA)
├── api-service.ts      # API service layer (automatski switchuje)
└── products-data.ts    # Mock data (fallback)

components/
├── product-grid.tsx    # Koristi fetchProducts()
└── product-card.tsx    # Prima podatke kroz props

app/
└── products/[id]/
    └── page.tsx        # Koristi fetchProductDetail()
```

---

## 🔍 Kako radi

### API Service Layer (`lib/api-service.ts`)

```typescript
export async function fetchProducts() {
  if (USE_MOCK_DATA) {
    // Return mock data
    return getMockProductsList();
  }
  
  // Fetch from real API
  const response = await fetch('http://localhost:5001/api/products');
  return response.json();
}
```

**Komponente ne znaju da li koriste mock ili real data!** Samo pozivaju `fetchProducts()` i `fetchProductDetail()`.

---

## ✅ Validacija

### Check koji mode je aktivan

Otvori browser console:

```
[API Config] 🔵 MOCK MODE
// ili
[API Config] 🟢 REAL API MODE
```

### Network Tab

**Mock Mode:**
- Nema network requests ka `/api/products`
- Instant loading (simulirani delay)

**Real API Mode:**
- Vidiš XHR requests ka `localhost:5001`
- Real loading time

---

## 🐛 Troubleshooting

### Problem: "Failed to load products"

**U REAL API MODE:**

1. **Check da li backend radi:**
```bash
curl http://localhost:5001/api/products
```

2. **Check CORS:**
Backend mora da dozvoli requests sa `http://localhost:3000`

3. **Check backend response format:**
Mora da bude u formatu iz `API_SPECIFICATION_LIST.md`

**Rešenje:** Privremeno switchu j nazad na MOCK mode dok ne fixuješ backend:
```typescript
export const USE_MOCK_DATA = true;
```

---

### Problem: API poziv traje predugo

1. **Check network tab** - vidi koliko traje request
2. **Check backend performance** - možda je scraping spor
3. **Add caching** na backend-u (Redis)

---

### Problem: Products se ne prikazuju

1. **Check console** - ima li errora?
2. **Check API response format** - odgovara li spec-u?
3. **Validate JSON** - valjda nije parse error?

```typescript
// Debug u api-service.ts
console.log('API Response:', data);
```

---

## 📊 Data Flow

```
USER ACTION
    ↓
Component (product-grid.tsx)
    ↓
API Service (api-service.ts)
    ↓
    ├─→ [MOCK MODE] → products-data.ts → Return mock data
    │
    └─→ [REAL MODE] → fetch(localhost:5001) → Return API data
    ↓
Component renders products
```

---

## 🎯 Production Deployment

Za production:

1. **Set environment variable:**
```env
NEXT_PUBLIC_API_URL=https://api.goldara.com
```

2. **Ensure MOCK mode is OFF:**
```typescript
export const USE_MOCK_DATA = false;
```

3. **Build:**
```bash
npm run build
```

4. **Test production build:**
```bash
npm start
```

---

## 📝 Testing Checklist

### Mock Mode Testing
- [ ] Products list se prikazuje
- [ ] Product detail page radi
- [ ] Price cards prikazuju podatke
- [ ] Charts se renderuju (mock data)
- [ ] Quick preview modal radi

### Real API Mode Testing
- [ ] Products list fetchu je sa API-ja
- [ ] Product detail fetchu je sa API-ja
- [ ] Loading states rade
- [ ] Error handling radi
- [ ] Prices su tačne
- [ ] Historical data se prikazuje (ako je implementirano)

---

## 🔗 Related Files

- `lib/api-config.ts` - Toggle config
- `lib/api-service.ts` - Service layer
- `lib/products-data.ts` - Mock data
- `types/api-types.ts` - TypeScript types
- `API_SPECIFICATION.md` - API spec za single product
- `API_SPECIFICATION_LIST.md` - API spec za product list
- `BACKEND_RESPONSE_FIXES.md` - Backend requirements

---

## 💡 Tips

1. **Development:** Koristi MOCK mode za brži development
2. **Testing:** Switchu j na REAL mode povremeno da validiraš integraciju
3. **Demo:** MOCK mode je perfektan za demo bez backend-a
4. **Production:** Uvek koristi REAL mode

---

## 🎉 Summary

**TL;DR:**

```typescript
// lib/api-config.ts

// Za development bez backend-a:
export const USE_MOCK_DATA = true;

// Za testiranje sa backend-om:
export const USE_MOCK_DATA = false;
```

**I to je sve što trebaš da uradiš!** 🚀

---

**Kreirao**: Frontend Team  
**Datum**: 2024-01-15  
**Status**: Ready to Use

