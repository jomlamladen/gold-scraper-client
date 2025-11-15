# Backend Response - Potrebne izmene

## 📋 Pregled

Trenutni backend response ima **dobar starting point**, ali treba nekoliko izmena da bi radio direktno sa frontend-om bez adaptera.

---

## ✅ Šta je DOBRO u trenutnom response-u

1. ✅ `success` flag
2. ✅ `currentPrices` array sa podacima iz više shop-ova
3. ✅ Dobri osnovni product field-ovi (name, weight, purity, category)
4. ✅ Availability status
5. ✅ Multiple sources/shops

---

## ❌ Šta treba POPRAVITI

### 1. Pagination (KRITIČNO!)

**Trenutno:**
```json
{
  "count": 10,
  "data": [...]
}
```

**Treba:**
```json
{
  "data": {
    "products": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalItems": 94,
      "itemsPerPage": 20,
      "hasNextPage": true,
      "hasPreviousPage": false
    }
  }
}
```

**Backend SQL:**
```sql
-- Dobij total count
SELECT COUNT(*) as total FROM products;

-- Dobij products za stranicu
SELECT * FROM products 
LIMIT 20 OFFSET 0;  -- page 1
-- OFFSET = (page - 1) * limit
```

---

### 2. PriceRange za svaki proizvod (KRITIČNO!)

Frontend prikazuje price range na product card-u. Treba dodati:

```json
{
  "priceRange": {
    "lowest": 14592,
    "highest": 15000,
    "average": 14678,
    "difference": 408,
    "lowestShop": "InvesticionoZlato.rs",
    "highestShop": "GoldRoyal.rs"
  }
}
```

**Backend calculation:**
```python
def calculate_price_range(current_prices):
    if not current_prices:
        return None
    
    sorted_prices = sorted(current_prices, key=lambda x: x['priceValue'])
    lowest = sorted_prices[0]
    highest = sorted_prices[-1]
    
    return {
        'lowest': lowest['priceValue'],
        'highest': highest['priceValue'],
        'average': sum(p['priceValue'] for p in current_prices) / len(current_prices),
        'difference': highest['priceValue'] - lowest['priceValue'],
        'lowestShop': map_shop_name(lowest['source']),
        'highestShop': map_shop_name(highest['source'])
    }
```

---

### 3. Field Mapping

**Trenutno** → **Treba:**

```json
// currentPrices array:
{
  "source": "dunavgold"          →  "shop": "DunavGold.rs"
  "sourceUrl": "..."             →  "shopUrl": "..."
  "scrapedAt": "2025-10-02..."   →  "updatedAt": "Pre 2h"
  "priceValue": 14270            →  "price": 14270 (remove priceValue)
}
```

**Dodaj:**
- `pricePerGram`: `price / weightValue` (za proizvode u gramima)
- `shippingInfo`: "Besplatna dostava" ili null
- `rating`: 4.5 ili null (shop rating)

**Backend:**
```python
def format_current_price(price_data, weight_value):
    return {
        'shop': map_shop_name(price_data['source']),
        'shopUrl': price_data['sourceUrl'],
        'price': price_data['priceValue'],
        'pricePerGram': round(price_data['priceValue'] / weight_value, 2) if weight_value else None,
        'updatedAt': format_relative_time(price_data['scrapedAt']),
        'availability': price_data['availability'],
        'shippingInfo': get_shop_shipping_info(price_data['source']),  # from config
        'rating': get_shop_rating(price_data['source'])  # from database
    }

def format_relative_time(timestamp):
    """Formatira '2025-10-02T21:14:05.972000' → 'Pre 2h'"""
    from datetime import datetime
    dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
    now = datetime.now()
    diff = now - dt
    
    minutes = int(diff.total_seconds() / 60)
    hours = int(minutes / 60)
    days = int(hours / 24)
    
    if minutes < 1: return "Upravo"
    if minutes < 60: return f"Pre {minutes}min"
    if hours < 24: return f"Pre {hours}h"
    return f"Pre {days} dana"

def map_shop_name(source):
    """Mapira internal name → display name"""
    shop_names = {
        'dunavgold': 'DunavGold.rs',
        'goldroyal': 'GoldRoyal.rs',
        'gvssrbija': 'GVSSrbija.rs',
        'investicionozlato-rs': 'InvesticionoZlato.rs',
        'goldenspace': 'GoldenSpace.rs'
    }
    return shop_names.get(source, source.title())
```

---

### 4. Top-level Product Fields

**Dodaj:**

```json
{
  "id": 1,  // INTEGER umesto hex stringa
  "description": "Zlatna poluga 5g, čistoća 999.9",
  "shopCount": 5,
  "lastUpdated": "2024-01-15T10:30:00Z",
  "availability": "in_stock"  // agregat svih shop-ova
}
```

**Backend:**
```python
def determine_product_availability(current_prices):
    """Agregat availability across shops"""
    if not current_prices:
        return "out_of_stock"
    
    in_stock_count = sum(1 for p in current_prices if p['availability'] == 'in_stock')
    percentage = in_stock_count / len(current_prices)
    
    if percentage >= 0.7: return "in_stock"
    if percentage > 0: return "limited_stock"
    return "out_of_stock"

def generate_description(product):
    """Generiši description"""
    category_name = "Zlatnik" if "Coin" in product['category'] else "Zlatna poluga"
    manufacturer_part = f" - {product['manufacturer']}" if product['manufacturer'] != 'Unknown' else ""
    return f"{category_name} {product['weight']}, čistoća {product['purity']}{manufacturer_part}"
```

---

### 5. Metadata (KRITIČNO!)

**Dodaj na root level:**

```json
{
  "data": {
    "products": [...],
    "metadata": {
      "lastScrapeTime": "2024-01-15T12:00:00Z",
      "nextUpdateIn": "30 minutes",
      "totalShops": 5
    }
  }
}
```

---

### 6. Filters Info

**Dodaj:**

```json
{
  "filters": {
    "appliedCategory": "all",
    "appliedSortBy": "updated_desc",
    "availableCategories": [
      { "value": "all", "label": "Svi proizvodi", "count": 94 },
      { "value": "gold_bars", "label": "Zlatne poluge", "count": 45 },
      { "value": "gold_coins", "label": "Zlatnici", "count": 23 },
      { "value": "silver_bars", "label": "Srebrne poluge", "count": 18 },
      { "value": "silver_coins", "label": "Srebrnjaci", "count": 8 }
    ]
  }
}
```

**Backend SQL:**
```sql
-- Count per category
SELECT 
  category,
  COUNT(*) as count
FROM products
GROUP BY category;
```

---

### 7. Category Mapping

**Trenutno:**
- "Gold Products"
- "Gold Coins"
- "Small Gold Bars"
- "Medium Gold Bars"

**Treba standardizovati na:**
- `"gold_bars"` (sve vrste poluga)
- `"gold_coins"` 
- `"silver_bars"`
- `"silver_coins"`

---

### 8. Image URLs

**Trenutno:**
```json
"image": "https://dunavgold.rs/wp-content/themes/merto/images/prod_loading.gif"
```

**Problem**: Placeholder gif

**Treba**: Real product images
- Scrape product images
- Ili koristi default images po kategoriji/težini
- Store u databazi

---

### 9. Trending (OPTIONAL ali nice to have)

```json
{
  "trending": {
    "direction": "up",  // "up" | "down" | "stable"
    "percentChange": 2.5,
    "period": "24h"
  }
}
```

**Backend:**
```python
def calculate_trending(product_id):
    """Compare current avg price vs 24h ago"""
    current_avg = get_current_avg_price(product_id)
    yesterday_avg = get_avg_price_at(product_id, datetime.now() - timedelta(days=1))
    
    if not yesterday_avg:
        return None
    
    change = ((current_avg - yesterday_avg) / yesterday_avg) * 100
    
    return {
        'direction': 'up' if change > 0.5 else 'down' if change < -0.5 else 'stable',
        'percentChange': round(change, 2),
        'period': '24h'
    }
```

---

## 🎯 Finalni Response Format (IDEAL)

```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Zlatna Pločica 5g",
        "weight": "5.0 g",
        "purity": "999.9",
        "image": "/images/gold-bar-5g.jpg",
        "description": "Zlatna poluga 5g, čistoća 999.9",
        "category": "gold_bars",
        "priceRange": {
          "lowest": 66773,
          "highest": 67874,
          "average": 67305,
          "difference": 1101,
          "lowestShop": "InvesticionoZlato.rs",
          "highestShop": "GoldenSpace.rs"
        },
        "availability": "in_stock",
        "shopCount": 5,
        "lastUpdated": "2024-01-15T10:30:00Z",
        "trending": {
          "direction": "up",
          "percentChange": 2.5,
          "period": "24h"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalItems": 94,
      "itemsPerPage": 10,
      "hasNextPage": true,
      "hasPreviousPage": false
    },
    "filters": {
      "appliedCategory": "all",
      "appliedSortBy": "updated_desc",
      "availableCategories": [
        { "value": "all", "label": "Svi proizvodi", "count": 94 },
        { "value": "gold_bars", "label": "Zlatne poluge", "count": 45 },
        { "value": "gold_coins", "label": "Zlatnici", "count": 23 }
      ]
    },
    "metadata": {
      "lastScrapeTime": "2024-01-15T12:00:00Z",
      "nextUpdateIn": "30 minutes",
      "totalShops": 5
    }
  }
}
```

---

## 🛠️ Interim Solution (dok ne implementiraš sve)

Napravio sam **adapter** (`utils/api-adapter.ts`) koji će transformisati trenutni response u očekivani format.

**Frontend koristi:**
```typescript
import { adaptProductListResponse } from '@/utils/api-adapter';

const backendData = await fetch('/api/products').then(r => r.json());
const frontendData = adaptProductListResponse(backendData, page, limit);
```

Ali **dugoročno**, backend treba da vrati format direktno kako je specifikovan!

---

## ✅ Priority Checklist

### Must Fix (Phase 1):
- [ ] Dodaj `pagination` objekat
- [ ] Dodaj `priceRange` za svaki proizvod
- [ ] Mapuj field names (`source` → `shop`, etc.)
- [ ] Formatuj `updatedAt` kao relativno vreme
- [ ] Dodaj `pricePerGram`
- [ ] Dodaj `description`
- [ ] Dodaj `metadata` objekat

### Should Fix (Phase 2):
- [ ] Real product images
- [ ] Shop ratings i shipping info
- [ ] Trending calculations
- [ ] Category counts u filters

### Nice to Have (Phase 3):
- [ ] Advanced filtering
- [ ] Full-text search
- [ ] Price history snapshots

---

## 📞 Pitanja?

Pogledaj:
- `API_SPECIFICATION_LIST.md` - Full spec
- `utils/api-adapter.ts` - Adapter code kao referenca
- `examples/product-list-example.json` - Kompletan primer

---

**Status**: Requires Backend Changes  
**Priority**: High  
**ETA**: 2-3 dana za Phase 1

