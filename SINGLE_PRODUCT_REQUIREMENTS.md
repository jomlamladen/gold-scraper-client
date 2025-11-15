# GET Single Product - Requirements za Backend

## 📍 Endpoint

```
GET /api/products/{id}
```

**Example:**
```
GET /api/products/1
```

---

## 🎯 Priority Levels

### ⭐ MUST HAVE (MVP - Phase 1)
Bez ovoga stranica ne može da radi.

### 🟡 SHOULD HAVE (Phase 2)
Stranica radi, ali sa ograničenom funkcionalnošću.

### ⚪ NICE TO HAVE (Phase 3)
Dodatne features koje poboljšavaju UX.

---

## 📦 Response Structure

```json
{
  "success": true,
  "data": {
    // MUST HAVE - Basic Info
    "id": 1,
    "name": "Zlatna Pločica 5g",
    "weight": "5.0 g",
    "purity": "999.9",
    "image": "/images/gold-bar-5g.jpg",
    "description": "Zlatna poluga 5g, čistoća 999.9",
    "category": "gold_bars",
    "lastUpdated": "2024-01-15T10:30:00Z",
    
    // MUST HAVE - Current Prices
    "priceData": [...],
    
    // SHOULD HAVE - Historical Data
    "historicalData": {...},
    
    // SHOULD HAVE - Shop History
    "shopHistoricalData": [...],
    
    // NICE TO HAVE - Heatmap Data
    "heatmapData": [...],
    
    // MUST HAVE - Price Analytics
    "priceAnalytics": {...},
    
    // MUST HAVE - Metadata
    "metadata": {...}
  }
}
```

---

## 🔴 MUST HAVE - Phase 1

### 1. Basic Product Info

```json
{
  "id": 1,                              // INTEGER (autoincrement iz baze)
  "name": "Zlatna Pločica 5g",          // string
  "weight": "5.0 g",                     // string
  "purity": "999.9",                     // string
  "image": "/images/gold-bar-5g.jpg",    // URL slike
  "description": "Zlatna poluga 5g, čistoća 999.9",
  "category": "gold_bars",               // enum: gold_bars, gold_coins, silver_bars, silver_coins
  "lastUpdated": "2024-01-15T10:30:00Z"  // ISO 8601 timestamp
}
```

**Backend SQL:**
```sql
SELECT 
  id,
  name,
  weight,
  purity,
  image,
  description,
  category,
  updated_at as lastUpdated
FROM products
WHERE id = ?;
```

---

### 2. Current Prices (priceData)

**Format:**
```json
"priceData": [
  {
    "shop": "DunavGold.rs",                    // friendly shop name
    "shopUrl": "https://dunavgold.rs",         // shop URL
    "price": 67380,                             // current price (integer)
    "pricePerGram": 13476,                      // price / weight (float)
    "updatedAt": "Pre 2h",                      // relativno vreme
    "availability": "in_stock",                 // in_stock | limited_stock | out_of_stock
    "shippingInfo": "Besplatna dostava",       // optional string
    "rating": 4.8                               // optional float (0-5)
  }
]
```

**Backend SQL:**
```sql
SELECT 
  s.name as shop,
  s.url as shopUrl,
  cp.price,
  cp.price / p.weight_value as pricePerGram,
  cp.scraped_at as scrapedAt,
  cp.availability,
  s.shipping_info as shippingInfo,
  s.rating
FROM current_prices cp
JOIN shops s ON cp.shop_id = s.id
JOIN products p ON cp.product_id = p.id
WHERE cp.product_id = ?
ORDER BY cp.price ASC;
```

**Backend Processing:**
```python
def format_current_prices(product_id):
    prices = db.query("""...""")
    
    return [
        {
            'shop': map_shop_name(p['shop']),
            'shopUrl': p['shopUrl'],
            'price': int(p['price']),
            'pricePerGram': round(p['pricePerGram'], 2),
            'updatedAt': format_relative_time(p['scrapedAt']),
            'availability': p['availability'],
            'shippingInfo': p['shippingInfo'],
            'rating': p['rating']
        }
        for p in prices
    ]
```

---

### 3. Price Analytics

**Format:**
```json
"priceAnalytics": {
  "currentLowest": {
    "shop": "InvesticionoZlato.rs",
    "price": 66773,
    "pricePerGram": 13354.6,
    "updatedAt": "Pre 30min"
  },
  "currentHighest": {
    "shop": "GoldenSpace.rs",
    "price": 67874,
    "pricePerGram": 13574.8,
    "updatedAt": "Pre 15min"
  },
  "currentAverage": 67305,
  "priceDifference": 1101,
  "priceVariancePercent": 1.65,
  "recommendedShop": "InvesticionoZlato.rs",
  "savingsVsAverage": 532,
  "savingsVsHighest": 1101
}
```

**Backend Calculation:**
```python
def calculate_price_analytics(current_prices):
    sorted_prices = sorted(current_prices, key=lambda x: x['price'])
    lowest = sorted_prices[0]
    highest = sorted_prices[-1]
    average = sum(p['price'] for p in current_prices) / len(current_prices)
    difference = highest['price'] - lowest['price']
    
    return {
        'currentLowest': {
            'shop': lowest['shop'],
            'price': lowest['price'],
            'pricePerGram': lowest['pricePerGram'],
            'updatedAt': lowest['updatedAt']
        },
        'currentHighest': {
            'shop': highest['shop'],
            'price': highest['price'],
            'pricePerGram': highest['pricePerGram'],
            'updatedAt': highest['updatedAt']
        },
        'currentAverage': round(average),
        'priceDifference': difference,
        'priceVariancePercent': round((difference / lowest['price']) * 100, 2),
        'recommendedShop': lowest['shop'],
        'savingsVsAverage': round(average - lowest['price']),
        'savingsVsHighest': difference
    }
```

---

### 4. Metadata

**Format:**
```json
"metadata": {
  "totalShops": 5,
  "lastScrapeTime": "2024-01-15T12:00:00Z",
  "nextUpdateIn": "30 minutes",
  "dataQuality": "excellent",
  "scrapingStatus": "active"
}
```

**Backend:**
```python
def get_metadata(product_id):
    shop_count = db.query("SELECT COUNT(*) FROM current_prices WHERE product_id = ?", [product_id])[0]['count']
    last_scrape = db.query("SELECT MAX(scraped_at) as last FROM current_prices WHERE product_id = ?", [product_id])[0]['last']
    
    # Calculate next update (npr. svaka 1h)
    next_update_time = datetime.fromisoformat(last_scrape) + timedelta(hours=1)
    time_until_update = next_update_time - datetime.now()
    next_update_str = f"{int(time_until_update.total_seconds() / 60)} minutes"
    
    return {
        'totalShops': shop_count,
        'lastScrapeTime': last_scrape,
        'nextUpdateIn': next_update_str,
        'dataQuality': 'excellent' if shop_count >= 4 else 'good' if shop_count >= 2 else 'fair',
        'scrapingStatus': 'active'
    }
```

---

## 🟡 SHOULD HAVE - Phase 2

### 5. Historical Data (12 meseci - glavni chart)

**Format:**
```json
"historicalData": {
  "period": "12_months",
  "dataPoints": [
    {
      "date": "2023-02-15",
      "month": "Feb",
      "shops": {
        "DunavGold.rs": 65500,
        "GoldRoyal.rs": 66200,
        "GVSSrbija.rs": 65800,
        "InvesticionoZlato.rs": 65300,
        "GoldenSpace.rs": 66000
      },
      "average": 65760,
      "lowest": 65300,
      "highest": 66200
    },
    // ... još 11 meseci (ukupno 12)
  ]
}
```

**Backend SQL:**
```sql
-- Monthly aggregates za poslednih 12 meseci
SELECT 
  DATE_TRUNC('month', ph.recorded_at) as month,
  s.name as shop,
  AVG(ph.price) as avg_price,
  MIN(ph.price) as min_price,
  MAX(ph.price) as max_price
FROM price_history ph
JOIN shops s ON ph.shop_id = s.id
WHERE ph.product_id = ?
  AND ph.recorded_at >= DATE('now', '-12 months')
GROUP BY DATE_TRUNC('month', ph.recorded_at), s.name
ORDER BY month;
```

**Backend Processing:**
```python
def generate_historical_data(product_id):
    # Dobij monthly data iz baze
    raw_data = db.query("""...""")
    
    # Group by month
    by_month = {}
    for row in raw_data:
        month_key = row['month']
        if month_key not in by_month:
            by_month[month_key] = {'shops': {}}
        by_month[month_key]['shops'][row['shop']] = int(row['avg_price'])
    
    # Calculate aggregates
    data_points = []
    for month, data in by_month.items():
        prices = list(data['shops'].values())
        data_points.append({
            'date': month,
            'month': datetime.fromisoformat(month).strftime('%b'),  # "Feb"
            'shops': data['shops'],
            'average': int(sum(prices) / len(prices)),
            'lowest': min(prices),
            'highest': max(prices)
        })
    
    return {
        'period': '12_months',
        'dataPoints': data_points
    }
```

---

### 6. Shop Historical Data (3 meseca per shop)

**Format:**
```json
"shopHistoricalData": [
  {
    "shop": "DunavGold.rs",
    "period": "3_months",
    "dataPoints": [
      {
        "date": "2023-10-17",
        "dateLabel": "17. okt",
        "price": 65500,
        "high": 65800,
        "low": 65200,
        "average": 65500
      },
      // ... još 29 poena (ukupno 30 za 90 dana, svaki 3. dan)
    ],
    "statistics": {
      "lowest": 65200,
      "highest": 67800,
      "average": 66500,
      "variance": 2600
    }
  }
  // ... za svaki shop
]
```

**Backend SQL:**
```sql
-- Dnevni podaci za 3 meseca za jedan shop
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

**Backend Processing:**
```python
def generate_shop_history(product_id):
    shops = get_all_shops_for_product(product_id)
    result = []
    
    for shop in shops:
        # Get daily data
        daily_data = db.query("""...""", [product_id, shop['id']])
        
        # Sample every 3rd day for cleaner chart (90 days → 30 points)
        sampled_data = daily_data[::3]
        
        data_points = [
            {
                'date': row['date'],
                'dateLabel': format_date_label(row['date']),  # "17. okt"
                'price': int(row['price']),
                'high': int(row['high']),
                'low': int(row['low']),
                'average': int(row['average'])
            }
            for row in sampled_data
        ]
        
        # Calculate statistics
        all_prices = [row['price'] for row in daily_data]
        statistics = {
            'lowest': min(all_prices),
            'highest': max(all_prices),
            'average': int(sum(all_prices) / len(all_prices)),
            'variance': max(all_prices) - min(all_prices)
        }
        
        result.append({
            'shop': shop['name'],
            'period': '3_months',
            'dataPoints': data_points,
            'statistics': statistics
        })
    
    return result
```

---

## ⚪ NICE TO HAVE - Phase 3

### 7. Heatmap Data (365 dana - GitHub style)

**Format:**
```json
"heatmapData": [
  {
    "shop": "DunavGold.rs",
    "year": 2024,
    "dataPoints": [
      {
        "date": "2023-01-16",
        "dayOfWeek": 1,        // 0=Sunday, 6=Saturday
        "weekNumber": 0,        // 0-52
        "price": 65500,
        "intensity": 2,         // 0-4 (0=no change, 4=huge change)
        "priceChange": -50,
        "percentChange": -0.08
      }
      // ... za svih 365 dana
    ]
  }
  // ... za svaki shop
]
```

**Intensity Calculation:**
```python
def calculate_intensity(price, base_price):
    """
    0 = no data / minimal change (<1%)
    1 = small change (1-5%)
    2 = moderate change (5-10%)
    3 = large change (10-15%)
    4 = extreme change (>15%)
    """
    if not price or not base_price:
        return 0
    
    change_percent = abs((price - base_price) / base_price * 100)
    
    if change_percent < 1: return 0
    if change_percent < 5: return 1
    if change_percent < 10: return 2
    if change_percent < 15: return 3
    return 4
```

**Backend SQL:**
```sql
-- Dnevni podaci za celu godinu
SELECT 
  DATE(ph.recorded_at) as date,
  CAST(strftime('%w', ph.recorded_at) AS INTEGER) as day_of_week,
  CAST(strftime('%W', ph.recorded_at) AS INTEGER) as week_number,
  AVG(ph.price) as price
FROM price_history ph
WHERE ph.product_id = ?
  AND ph.shop_id = ?
  AND ph.recorded_at >= DATE('now', '-365 days')
GROUP BY DATE(ph.recorded_at)
ORDER BY date;
```

**Backend Processing:**
```python
def generate_heatmap_data(product_id):
    shops = get_all_shops_for_product(product_id)
    result = []
    
    for shop in shops:
        daily_data = db.query("""...""", [product_id, shop['id']])
        
        # Calculate base price (average for the period)
        base_price = sum(row['price'] for row in daily_data) / len(daily_data)
        
        data_points = []
        prev_price = None
        
        for row in daily_data:
            price_change = row['price'] - prev_price if prev_price else 0
            percent_change = (price_change / prev_price * 100) if prev_price else 0
            
            data_points.append({
                'date': row['date'],
                'dayOfWeek': row['day_of_week'],
                'weekNumber': row['week_number'],
                'price': int(row['price']),
                'intensity': calculate_intensity(row['price'], base_price),
                'priceChange': int(price_change),
                'percentChange': round(percent_change, 2)
            })
            
            prev_price = row['price']
        
        result.append({
            'shop': shop['name'],
            'year': datetime.now().year,
            'dataPoints': data_points
        })
    
    return result
```

---

## 📊 Data Requirements Summary

### Database Tables Needed:

```sql
-- Products table
products (id, name, weight, purity, category, image, description, updated_at)

-- Shops table  
shops (id, name, url, rating, shipping_info)

-- Current prices
current_prices (product_id, shop_id, price, availability, scraped_at)

-- Price history
price_history (product_id, shop_id, price, recorded_at)
```

### Data Points per Product:

| Data Type | Rows | Retention | Usage |
|-----------|------|-----------|-------|
| Current Prices | 5-10 | Latest only | Price cards, analytics |
| Monthly History | 12×5 = 60 | 12 months | Main chart |
| Daily History | 90×5 = 450 | 3 months | Shop charts |
| Yearly History | 365×5 = 1825 | 1 year | Heatmap |

---

## 🚀 Implementation Phases

### Phase 1 (MVP - 2-3 dana):
```
✅ Basic product info
✅ Current prices (priceData)
✅ Price analytics
✅ Metadata
```

**Frontend može raditi sa ovim!** Stranica prikazuje:
- Product info
- Current prices list (expandable items)
- Stats grid (lowest, highest, average, difference)

---

### Phase 2 (Full Features - 3-5 dana):
```
✅ Historical data (12 months)
✅ Shop historical data (3 months)
```

**Frontend dobija:**
- Main chart (12-month price history)
- Expandable shop charts (3-month history sa mini stats)

---

### Phase 3 (Enhanced - 1-2 nedelje):
```
✅ Heatmap data (365 days)
✅ Real product images
✅ Shop ratings & shipping info
✅ Trending calculations
```

**Frontend dobija:**
- Heatmap view (GitHub-style)
- Better product images
- More shop details

---

## 🎯 Minimal Working Example (Phase 1)

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Zlatna Pločica 5g",
    "weight": "5.0 g",
    "purity": "999.9",
    "image": "/images/gold-bar-5g.jpg",
    "description": "Zlatna poluga 5g, čistoća 999.9",
    "category": "gold_bars",
    "lastUpdated": "2024-01-15T10:30:00Z",
    
    "priceData": [
      {
        "shop": "InvesticionoZlato.rs",
        "shopUrl": "https://investiciono-zlato.rs",
        "price": 66773,
        "pricePerGram": 13354.6,
        "updatedAt": "Pre 30min",
        "availability": "in_stock",
        "shippingInfo": null,
        "rating": null
      }
      // ... ostali shop-ovi
    ],
    
    "priceAnalytics": {
      "currentLowest": { "shop": "InvesticionoZlato.rs", "price": 66773, "pricePerGram": 13354.6, "updatedAt": "Pre 30min" },
      "currentHighest": { "shop": "GoldenSpace.rs", "price": 67874, "pricePerGram": 13574.8, "updatedAt": "Pre 15min" },
      "currentAverage": 67305,
      "priceDifference": 1101,
      "priceVariancePercent": 1.65,
      "recommendedShop": "InvesticionoZlato.rs",
      "savingsVsAverage": 532,
      "savingsVsHighest": 1101
    },
    
    "metadata": {
      "totalShops": 5,
      "lastScrapeTime": "2024-01-15T12:00:00Z",
      "nextUpdateIn": "30 minutes",
      "dataQuality": "excellent",
      "scrapingStatus": "active"
    }
  }
}
```

---

## ⚠️ Important Notes

1. **Integer ID**: Mora biti integer, ne hex string
2. **Relative Time**: `updatedAt` kao "Pre 2h", ne timestamp
3. **Shop Names**: Friendly names ("DunavGold.rs"), ne internal ("dunavgold")
4. **Price as Integer**: Cene kao integer (67380), ne float
5. **ISO Timestamps**: Svi datumi u ISO 8601 format
6. **Availability**: Mora biti tačan status, ne hardcoded "out_of_stock"

---

## 📞 Za Backend Tim

**Prioritet:**
1. Phase 1 (MVP) - 2-3 dana → Frontend može početi testiranje
2. Phase 2 (Charts) - dodatnih 3-5 dana → Full functionality
3. Phase 3 (Enhancements) - kada je sve drugo gotovo

**Pitanja?** Pogledaj:
- `API_SPECIFICATION.md` - Full detailed spec
- `examples/product-detail-example.json` - Kompletan primer
- `types/api-types.ts` - TypeScript tipovi

---

**Verzija**: 1.0  
**Datum**: 2024-01-15  
**Status**: Ready for Implementation

