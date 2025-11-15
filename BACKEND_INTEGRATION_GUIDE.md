# Backend Integration Guide - Goldara

## 📋 Pregled

Ovaj dokument sadrži sve potrebne informacije za implementaciju backend API-ja koji će služiti podatke za Goldara frontend aplikaciju.

## 📁 Dokumentacija

1. **API_SPECIFICATION.md** - Detaljnа specifikacija za single product endpoint
2. **API_SPECIFICATION_LIST.md** - Detaljnа specifikacija za products list endpoint
3. **types/api-types.ts** - TypeScript tipovi (može se koristiti i za backend validation)

## 🎯 Prioriteti

### Must Have (MVP)
1. ✅ **GET /api/products** - Lista proizvoda
2. ✅ **GET /api/products/{id}** - Detalji proizvoda
3. ✅ **Price scraping** - Osnovno scraping cena sa shop-ova
4. ✅ **Historical data** - Čuvanje istorijskih podataka

### Should Have (Phase 2)
- Real-time updates (WebSocket ili SSE)
- Advanced filtering i search
- User favorites/watchlist
- Price alerts

### Nice to Have (Phase 3)
- Price prediction (ML model)
- Automatic price comparison notifications
- Shop reliability scoring
- Advanced analytics

## 🔧 Tehnički zahtevi

### Endpoints

#### 1. Lista proizvoda
```
GET /api/products?category={category}&sortBy={sortBy}&page={page}&limit={limit}
```
**Response**: Pogledaj `API_SPECIFICATION_LIST.md`

#### 2. Detalji proizvoda
```
GET /api/products/{id}
```
**Response**: Pogledaj `API_SPECIFICATION.md`

### Database Schema Preporuke

```sql
-- Products table
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  weight TEXT NOT NULL,
  purity TEXT NOT NULL,
  image TEXT,
  description TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Shops table
CREATE TABLE shops (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  rating REAL,
  is_active BOOLEAN DEFAULT 1,
  last_scrape_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Current prices table (najnovije cene)
CREATE TABLE current_prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  shop_id INTEGER NOT NULL,
  price REAL NOT NULL,
  price_per_gram REAL,
  availability TEXT DEFAULT 'in_stock',
  shipping_info TEXT,
  scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (shop_id) REFERENCES shops(id),
  UNIQUE(product_id, shop_id)
);

-- Price history table (istorijski podaci)
CREATE TABLE price_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  shop_id INTEGER NOT NULL,
  price REAL NOT NULL,
  price_per_gram REAL,
  availability TEXT,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (shop_id) REFERENCES shops(id)
);

-- Indexi za performanse
CREATE INDEX idx_current_prices_product ON current_prices(product_id);
CREATE INDEX idx_current_prices_shop ON current_prices(shop_id);
CREATE INDEX idx_price_history_product ON price_history(product_id);
CREATE INDEX idx_price_history_recorded ON price_history(recorded_at);
CREATE INDEX idx_products_category ON products(category);
```

### Scraping Requirements

#### Scraping Frequency
- **High priority products**: Svaka 1h
- **Normal products**: Svaka 3-6h
- **Low traffic products**: Svaka 12-24h

#### Scraping Targets (primer shop-ova)
1. **GoldHub.net**
2. **GoldShop.rs**
3. **MetalStore.com**
4. **PreciousMetal.co**
5. **Aypym.rs**

#### Scraping Strategy
```python
# Pseudocode
def scrape_product_prices(product_id):
    for shop in active_shops:
        try:
            # 1. Fetch product page
            page = fetch(shop.url + product.slug)
            
            # 2. Parse price data
            price_data = parse_price(page)
            
            # 3. Update current_prices
            update_current_price(product_id, shop.id, price_data)
            
            # 4. Save to price_history
            save_price_history(product_id, shop.id, price_data)
            
            # 5. Update shop.last_scrape_at
            update_shop_scrape_time(shop.id)
            
        except Exception as e:
            log_scraping_error(shop.id, product_id, e)
            continue
```

### Historical Data Aggregation

Za frontend charts, trebaju agregirani podaci:

#### 12-mesečni chart (glavni)
```sql
-- Mesečni agregat za svaki shop
SELECT 
  p.id as product_id,
  s.name as shop_name,
  DATE_TRUNC('month', ph.recorded_at) as month,
  AVG(ph.price) as avg_price,
  MIN(ph.price) as min_price,
  MAX(ph.price) as max_price
FROM price_history ph
JOIN products p ON ph.product_id = p.id
JOIN shops s ON ph.shop_id = s.id
WHERE ph.recorded_at >= DATE('now', '-12 months')
  AND p.id = ?
GROUP BY p.id, s.name, DATE_TRUNC('month', ph.recorded_at)
ORDER BY month;
```

#### 3-mesečni chart (po shop-u)
```sql
-- Dnevni ili svaka 3 dana za period od 3 meseca
SELECT 
  DATE(ph.recorded_at) as date,
  AVG(ph.price) as price,
  MAX(ph.price) as high,
  MIN(ph.price) as low,
  AVG(ph.price) as average
FROM price_history ph
WHERE ph.product_id = ?
  AND ph.shop_id = ?
  AND ph.recorded_at >= DATE('now', '-3 months')
GROUP BY DATE(ph.recorded_at)
ORDER BY date;
```

#### Heatmap data (365 dana)
```sql
-- Dnevni podaci za celu godinu
SELECT 
  DATE(ph.recorded_at) as date,
  s.name as shop,
  AVG(ph.price) as price,
  CAST(strftime('%w', ph.recorded_at) AS INTEGER) as day_of_week,
  CAST(strftime('%W', ph.recorded_at) AS INTEGER) as week_number
FROM price_history ph
JOIN shops s ON ph.shop_id = s.id
WHERE ph.product_id = ?
  AND ph.recorded_at >= DATE('now', '-365 days')
GROUP BY DATE(ph.recorded_at), s.name
ORDER BY date;
```

### Caching Strategy

```javascript
// Redis cache example
const CACHE_KEYS = {
  productDetail: (id) => `product:${id}:detail`,
  productList: (params) => `products:list:${JSON.stringify(params)}`,
  productPrices: (id) => `product:${id}:prices`,
  shopHistory: (productId, shopId) => `product:${productId}:shop:${shopId}:history`
};

const CACHE_TTL = {
  productDetail: 1800, // 30 minutes
  productList: 900,    // 15 minutes
  productPrices: 600,  // 10 minutes
  shopHistory: 3600    // 1 hour
};

// Example usage
async function getProductDetail(id) {
  const cacheKey = CACHE_KEYS.productDetail(id);
  
  // Try cache first
  let data = await redis.get(cacheKey);
  if (data) return JSON.parse(data);
  
  // Fetch from DB
  data = await fetchProductFromDB(id);
  
  // Cache it
  await redis.setex(cacheKey, CACHE_TTL.productDetail, JSON.stringify(data));
  
  return data;
}
```

## 🚀 Quick Start

### 1. Setup Database
```bash
# Run migration scripts
npm run db:migrate
# or
python manage.py migrate
```

### 2. Seed Initial Data
```bash
# Add products and shops
npm run db:seed
# or
python manage.py seed
```

### 3. Start Scraping Service
```bash
# Background job for scraping
npm run scraper:start
# or
python scraper.py --daemon
```

### 4. Start API Server
```bash
npm run dev
# or
python app.py
```

### 5. Test Endpoints
```bash
# Test product list
curl http://localhost:3000/api/products

# Test single product
curl http://localhost:3000/api/products/1
```

## 📊 Response Time Targets

- **GET /api/products**: < 200ms
- **GET /api/products/{id}**: < 500ms (sa caching)
- **GET /api/products/{id}**: < 2000ms (bez caching)

## 🔒 Security Considerations

1. **Rate Limiting**: 
   - Public API: 60 requests/minute
   - Authenticated: 300 requests/minute

2. **Input Validation**:
   - Validate all query parameters
   - Sanitize product IDs
   - Prevent SQL injection

3. **CORS**:
   - Allow only specific origins
   - Configure proper headers

4. **API Keys** (optional):
   - Implement API key authentication
   - Track usage per key

## 📈 Monitoring

### Key Metrics
- API response times
- Scraping success rate
- Database query performance
- Cache hit rate
- Error rates per endpoint

### Logging
```javascript
{
  "timestamp": "2024-01-15T12:00:00Z",
  "level": "info",
  "endpoint": "/api/products/1",
  "method": "GET",
  "responseTime": 145,
  "statusCode": 200,
  "userId": null,
  "ip": "192.168.1.1"
}
```

## 🐛 Error Handling

Svi error responses treba da prate standardni format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "statusCode": 400,
    "details": {
      "field": "Specific error detail"
    }
  }
}
```

### Error Codes
- `PRODUCT_NOT_FOUND` - 404
- `INVALID_PARAMETERS` - 400
- `INTERNAL_SERVER_ERROR` - 500
- `SERVICE_UNAVAILABLE` - 503
- `RATE_LIMIT_EXCEEDED` - 429

## 🧪 Testing

### Unit Tests
- Test individual functions
- Mock database calls
- Test data transformations

### Integration Tests
- Test full API endpoints
- Test with real database
- Test scraping logic

### Example Test
```javascript
describe('GET /api/products/:id', () => {
  it('should return product detail with all required fields', async () => {
    const response = await request(app)
      .get('/api/products/1')
      .expect(200);
    
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('priceData');
    expect(response.body.data).toHaveProperty('historicalData');
  });
  
  it('should return 404 for non-existent product', async () => {
    const response = await request(app)
      .get('/api/products/99999')
      .expect(404);
    
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe('PRODUCT_NOT_FOUND');
  });
});
```

## 📞 Support & Questions

Za pitanja oko implementacije:
- Pogledaj detaljne specifikacije u `API_SPECIFICATION.md` i `API_SPECIFICATION_LIST.md`
- Koristi TypeScript tipove iz `types/api-types.ts` kao referencu
- Testovi requests sa cURL primerima u dokumentaciji

## 📝 Changelog

### Version 1.0 (Initial)
- Base API specification
- Product list endpoint
- Product detail endpoint
- Historical data structure
- Heatmap data structure

---

**Kreirao**: Frontend Team  
**Datum**: 2024-01-15  
**Status**: Ready for Implementation

