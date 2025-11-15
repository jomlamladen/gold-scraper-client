# Single Product API - Implementation Checklist

## Quick Reference

**Endpoint**: `GET /api/products/{id}`  
**Example**: `GET /api/products/1`

---

## ✅ Phase 1: MVP (Must Have)

### Basic Product Info
- [ ] `id` - Integer (ne hex string!)
- [ ] `name` - Product name
- [ ] `weight` - Weight string ("5.0 g")
- [ ] `purity` - Purity string ("999.9")
- [ ] `image` - Image URL (može placeholder za sada)
- [ ] `description` - Generated description
- [ ] `category` - Standardized category (gold_bars, gold_coins, etc.)
- [ ] `lastUpdated` - ISO 8601 timestamp

### Current Prices (priceData array)
Za svaki shop:
- [ ] `shop` - Friendly shop name ("DunavGold.rs")
- [ ] `shopUrl` - Shop URL
- [ ] `price` - Current price (integer)
- [ ] `pricePerGram` - Calculated (price / weight)
- [ ] `updatedAt` - Relative time ("Pre 2h")
- [ ] `availability` - Correct status (in_stock/limited_stock/out_of_stock)
- [ ] `shippingInfo` - Can be null for now
- [ ] `rating` - Can be null for now

### Price Analytics
- [ ] `currentLowest` - Lowest price object
- [ ] `currentHighest` - Highest price object
- [ ] `currentAverage` - Average price
- [ ] `priceDifference` - Difference highest - lowest
- [ ] `priceVariancePercent` - Percentage variance
- [ ] `recommendedShop` - Shop with lowest price
- [ ] `savingsVsAverage` - Savings compared to average
- [ ] `savingsVsHighest` - Savings compared to highest

### Metadata
- [ ] `totalShops` - Number of shops
- [ ] `lastScrapeTime` - ISO 8601 timestamp
- [ ] `nextUpdateIn` - String like "30 minutes"
- [ ] `dataQuality` - "excellent" / "good" / "fair"
- [ ] `scrapingStatus` - "active" / "paused" / "error"

---

## 🟡 Phase 2: Full Features (Should Have)

### Historical Data (12 months)
- [ ] `period` - "12_months"
- [ ] `dataPoints` array - 12 monthly data points
  - [ ] `date` - ISO date
  - [ ] `month` - Short month name ("Jan", "Feb")
  - [ ] `shops` - Object with shop prices
  - [ ] `average` - Monthly average
  - [ ] `lowest` - Monthly lowest
  - [ ] `highest` - Monthly highest

### Shop Historical Data (3 months per shop)
Za svaki shop:
- [ ] `shop` - Shop name
- [ ] `period` - "3_months"
- [ ] `dataPoints` array - ~30 data points (every 3 days)
  - [ ] `date` - ISO date
  - [ ] `dateLabel` - Formatted date ("17. okt")
  - [ ] `price` - Price
  - [ ] `high` - Daily high
  - [ ] `low` - Daily low
  - [ ] `average` - Daily average
- [ ] `statistics` object
  - [ ] `lowest` - Period lowest
  - [ ] `highest` - Period highest
  - [ ] `average` - Period average
  - [ ] `variance` - highest - lowest

---

## ⚪ Phase 3: Enhanced (Nice to Have)

### Heatmap Data (365 days)
Za svaki shop:
- [ ] `shop` - Shop name
- [ ] `year` - Current year (2024)
- [ ] `dataPoints` array - 365 daily points
  - [ ] `date` - ISO date
  - [ ] `dayOfWeek` - 0-6 (0=Sunday)
  - [ ] `weekNumber` - 0-52
  - [ ] `price` - Price
  - [ ] `intensity` - 0-4 intensity level
  - [ ] `priceChange` - Change from previous day
  - [ ] `percentChange` - Percent change

### Enhancements
- [ ] Real product images (not placeholder gif)
- [ ] Shop ratings (from database)
- [ ] Shipping info per shop
- [ ] Trending data calculation

---

## 🐛 Common Issues to Avoid

- ❌ **Hex string ID** → ✅ Use integer ID
- ❌ **Hardcoded "out_of_stock"** → ✅ Calculate from currentPrices
- ❌ **Internal shop names** ("dunavgold") → ✅ Friendly names ("DunavGold.rs")
- ❌ **ISO timestamp in updatedAt** → ✅ Relative time ("Pre 2h")
- ❌ **Missing pricePerGram** → ✅ Calculate price / weight
- ❌ **Float prices with decimals** → ✅ Integer prices (67380 not 67380.0)

---

## 📊 Database Queries Needed

```sql
-- Basic product info
SELECT * FROM products WHERE id = ?;

-- Current prices
SELECT * FROM current_prices 
JOIN shops ON shop_id = shops.id
WHERE product_id = ?;

-- Monthly history (for 12-month chart)
SELECT DATE_TRUNC('month', recorded_at) as month,
       shop_id, AVG(price) as avg_price
FROM price_history
WHERE product_id = ? AND recorded_at >= DATE('now', '-12 months')
GROUP BY month, shop_id;

-- Daily history (for 3-month shop charts)
SELECT DATE(recorded_at) as date,
       AVG(price), MAX(price), MIN(price)
FROM price_history
WHERE product_id = ? AND shop_id = ? AND recorded_at >= DATE('now', '-3 months')
GROUP BY date;

-- Yearly history (for heatmap)
SELECT DATE(recorded_at) as date, AVG(price)
FROM price_history
WHERE product_id = ? AND shop_id = ? AND recorded_at >= DATE('now', '-365 days')
GROUP BY date;
```

---

## 🧪 Testing

### Test with cURL:
```bash
curl -X GET "http://localhost:8000/api/products/1" | jq
```

### Expected Response Size:
- **Phase 1 (MVP)**: ~5-10 KB
- **Phase 2 (with history)**: ~50-100 KB
- **Phase 3 (with heatmap)**: ~200-300 KB

### Validate Response:
- [ ] All required fields present
- [ ] ID is integer
- [ ] Prices are sorted (lowest first)
- [ ] priceAnalytics matches priceData
- [ ] Shop names are friendly
- [ ] Timestamps are ISO 8601
- [ ] updatedAt is relative time

---

## 📁 Reference Files

- `SINGLE_PRODUCT_REQUIREMENTS.md` - Full detailed requirements
- `API_SPECIFICATION.md` - Complete API spec
- `examples/product-detail-example.json` - Full example response
- `types/api-types.ts` - TypeScript type definitions

---

## 🎯 Success Criteria

### Phase 1 Complete When:
- [ ] Endpoint returns valid JSON
- [ ] All MUST HAVE fields present
- [ ] Frontend can display product page
- [ ] Price list works
- [ ] Stats grid shows correct data

### Phase 2 Complete When:
- [ ] Historical chart displays 12 months
- [ ] Shop charts display 3 months
- [ ] All charts render correctly
- [ ] Mini stats are accurate

### Phase 3 Complete When:
- [ ] Heatmap displays full year
- [ ] Real images load
- [ ] Shop details complete
- [ ] Performance is good (<500ms)

---

**Start Date**: _______  
**Phase 1 Target**: _______ (2-3 days)  
**Phase 2 Target**: _______ (3-5 days)  
**Phase 3 Target**: _______ (1-2 weeks)

