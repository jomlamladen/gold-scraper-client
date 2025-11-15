# Backend API Documentation - Goldara

## 📁 Struktura dokumentacije

Ova dokumentacija sadrži sve potrebne informacije za implementaciju backend API-ja za Goldara aplikaciju.

### Glavni dokumenti

1. **BACKEND_INTEGRATION_GUIDE.md** ⭐
   - **Start ovde!** - Glavni dokument sa pregledom
   - Quick start guide
   - Database schema
   - Scraping requirements
   - Caching strategija
   - Performance targets
   - Security considerations

2. **API_SPECIFICATION.md**
   - Detaljni spec za **GET /api/products/{id}**
   - Request format
   - Response structure
   - Field descriptions
   - Error responses
   - Implementation notes

3. **API_SPECIFICATION_LIST.md**
   - Detaljni spec za **GET /api/products**
   - Query parameters
   - Pagination
   - Filtering & sorting
   - Response structure

4. **types/api-types.ts**
   - TypeScript type definitions
   - Interface-i za sve API response-ove
   - Enums i constants
   - Type guards
   - **Može se koristiti i za backend validation schema!**

### Primeri

5. **examples/product-detail-example.json**
   - Kompletan primer response-a za single product
   - Svi obavezni field-ovi
   - Realistic mock data

6. **examples/product-list-example.json**
   - Kompletan primer response-a za product list
   - 10 proizvoda (različite kategorije)
   - Pagination info

---

## 🚀 Kako početi

### 1. Pročitaj dokumentaciju (30-60 min)
```
1. BACKEND_INTEGRATION_GUIDE.md  (overview)
2. API_SPECIFICATION.md           (single product endpoint)
3. API_SPECIFICATION_LIST.md      (list endpoint)
4. types/api-types.ts             (TypeScript tipovi)
```

### 2. Pogledaj primere (10 min)
```
1. examples/product-detail-example.json
2. examples/product-list-example.json
```

### 3. Setup development environment
```bash
# Setup database
CREATE DATABASE goldara;

# Run migrations (koristi schema iz BACKEND_INTEGRATION_GUIDE.md)

# Seed initial data (proizvodi, shop-ovi)

# Setup scraping jobs
```

### 4. Implementiraj endpoints
```
Priority 1: GET /api/products           (list)
Priority 2: GET /api/products/{id}      (detail)
Priority 3: Scraping logic
Priority 4: Historical data aggregation
```

---

## 🎯 Ključni koncepti

### Struktura podataka

```
Product
  ├─ Basic Info (name, weight, purity, image, description)
  ├─ Current Prices (5 shops)
  │   ├─ shop, price, pricePerGram
  │   ├─ updatedAt, availability
  │   └─ shippingInfo, rating
  ├─ Historical Data (12 months)
  │   └─ monthly aggregates per shop
  ├─ Shop History (3 months)
  │   └─ daily/3-day data per shop
  ├─ Heatmap Data (365 days)
  │   └─ daily prices with intensity
  └─ Price Analytics
      ├─ lowest, highest, average
      ├─ difference, variance
      └─ recommendations
```

### Scraping Flow

```
1. Fetch product page from shop
2. Parse price & availability
3. Update current_prices table
4. Insert into price_history table
5. Cache response data
6. Repeat for all shops
```

### Data Aggregation

```
Raw Data (price_history)
    ↓
Monthly Aggregates (for 12-month chart)
    ↓
Daily/3-day Aggregates (for shop charts)
    ↓
Daily with Intensity (for heatmap)
    ↓
Cache (Redis)
    ↓
API Response
```

---

## 📊 API Endpoints Overview

### 1. Products List
```
GET /api/products
Query: ?category=gold_bars&sortBy=price_asc&page=1&limit=20
Response: List of products with price ranges
```

### 2. Single Product
```
GET /api/products/{id}
Response: Full product details with historical data
```

---

## ✅ Checklist za implementaciju

### Phase 1: MVP
- [ ] Database setup (tables, indexes)
- [ ] Seed proizvoda i shop-ova
- [ ] GET /api/products endpoint
- [ ] GET /api/products/{id} endpoint
- [ ] Basic price scraping (1 shop)
- [ ] Save to current_prices & price_history
- [ ] Basic caching (Redis)

### Phase 2: Full Features
- [ ] Scraping za svih 5 shop-ova
- [ ] Scraping scheduler (cron jobs)
- [ ] Historical data aggregation
- [ ] Heatmap data generation
- [ ] Error handling & retry logic
- [ ] Rate limiting
- [ ] Monitoring & logging

### Phase 3: Optimization
- [ ] Query optimization
- [ ] Advanced caching strategies
- [ ] Real-time updates (WebSocket)
- [ ] Price prediction (ML)
- [ ] Alerts system

---

## 🔗 Quick Links

- **Database Schema**: `BACKEND_INTEGRATION_GUIDE.md` → Database Schema Preporuke
- **Scraping Logic**: `BACKEND_INTEGRATION_GUIDE.md` → Scraping Requirements
- **Response Format**: `API_SPECIFICATION.md` → Response Structure
- **Type Definitions**: `types/api-types.ts`
- **Example Response**: `examples/product-detail-example.json`

---

## 💡 Tips za implementaciju

1. **Start Simple**: Prvo implementiraj basic endpoints sa mock podacima
2. **Test Early**: Testiraj sa frontend-om što pre
3. **Cache Heavily**: Caching je ključan za performanse
4. **Monitor Everything**: Log svi scraping errors i API calls
5. **Optimize Later**: Prvo napravi da radi, pa optimizuj

---

## 🐛 Problemi i pitanja

Ako nešto nije jasno:
1. Proveri primere u `examples/` folderu
2. Pogledaj TypeScript tipove u `types/api-types.ts`
3. Traži odgovor u dokumentaciji
4. Kontaktiraj frontend tim

---

## 📝 Notes

- Svi datumi su u **ISO 8601** formatu
- Cene su u **RSD** (bez stringa "RSD")
- `updatedAt` field je **relativan string** ("Pre 2h")
- Shop colors se definišu na frontend-u
- Response treba da bude **valid JSON**

---

**Datum kreiranja**: 2024-01-15  
**Frontend verzija**: 1.0  
**Status**: Ready for Implementation

Srećno! 🚀

