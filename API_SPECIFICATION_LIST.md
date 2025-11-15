# API Specifikacija - Goldara Products List

## Endpoint: Get All Products

### Request

```
GET /api/products
```

**Query Parameters:**
- `category` (string, optional): Filter po kategoriji
  - Values: `gold_bars`, `gold_coins`, `silver_bars`, `silver_coins`, `all`
  - Default: `all`
- `sortBy` (string, optional): Sortiranje
  - Values: `price_asc`, `price_desc`, `name_asc`, `name_desc`, `purity_desc`, `updated_desc`
  - Default: `updated_desc`
- `page` (integer, optional): Broj stranice (pagination)
  - Default: 1
- `limit` (integer, optional): Broj proizvoda po stranici
  - Default: 20
  - Max: 100

**Example Requests:**
```
GET /api/products
GET /api/products?category=gold_bars&sortBy=price_asc
GET /api/products?page=2&limit=10
```

---

## Response Structure

### Success Response (200 OK)

```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Zlatna poluga Argor Heraeus 5g",
        "weight": "5g",
        "purity": "999.9",
        "image": "/images/gold-bar-5g.jpg",
        "description": "Certificirana zlatna poluga od 5 grama",
        "category": "gold_bars",
        "priceRange": {
          "lowest": 14120,
          "highest": 14600,
          "average": 14350,
          "difference": 480,
          "lowestShop": "Aypym.rs",
          "highestShop": "PreciousMetal.co"
        },
        "availability": "in_stock",
        "shopCount": 5,
        "lastUpdated": "2024-01-15T10:30:00Z",
        "trending": {
          "direction": "up",
          "percentChange": 2.5,
          "period": "24h"
        }
      },
      {
        "id": 2,
        "name": "Zlatna poluga Argor Heraeus 10g",
        "weight": "10g",
        "purity": "999.9",
        "image": "/images/gold-bar-10g.jpg",
        "description": "Certificirana zlatna poluga od 10 grama",
        "category": "gold_bars",
        "priceRange": {
          "lowest": 28240,
          "highest": 29200,
          "average": 28700,
          "difference": 960,
          "lowestShop": "GoldHub.net",
          "highestShop": "MetalStore.com"
        },
        "availability": "limited_stock",
        "shopCount": 5,
        "lastUpdated": "2024-01-15T09:45:00Z",
        "trending": {
          "direction": "down",
          "percentChange": -1.2,
          "period": "24h"
        }
      },
      {
        "id": 3,
        "name": "Zlatna poluga Argor Heraeus 20g",
        "weight": "20g",
        "purity": "999.9",
        "image": "/images/gold-bar-20g.jpg",
        "description": "Certificirana zlatna poluga od 20 grama",
        "category": "gold_bars",
        "priceRange": {
          "lowest": 56480,
          "highest": 58400,
          "average": 57400,
          "difference": 1920,
          "lowestShop": "Aypym.rs",
          "highestShop": "PreciousMetal.co"
        },
        "availability": "in_stock",
        "shopCount": 5,
        "lastUpdated": "2024-01-15T11:00:00Z",
        "trending": {
          "direction": "stable",
          "percentChange": 0.3,
          "period": "24h"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 94,
      "itemsPerPage": 20,
      "hasNextPage": true,
      "hasPreviousPage": false
    },
    "filters": {
      "appliedCategory": "all",
      "appliedSortBy": "updated_desc",
      "availableCategories": [
        {
          "value": "all",
          "label": "Svi proizvodi",
          "count": 94
        },
        {
          "value": "gold_bars",
          "label": "Zlatne poluge",
          "count": 45
        },
        {
          "value": "gold_coins",
          "label": "Zlatnici",
          "count": 23
        },
        {
          "value": "silver_bars",
          "label": "Srebrne poluge",
          "count": 18
        },
        {
          "value": "silver_coins",
          "label": "Srebrnjaci",
          "count": 8
        }
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

## Field Descriptions

### Product Item
- **id**: Jedinstveni ID proizvoda (integer)
- **name**: Naziv proizvoda (string)
- **weight**: Težina (string)
- **purity**: Čistoća (string)
- **image**: URL slike (string)
- **description**: Kratak opis (string)
- **category**: Kategorija (enum)
- **priceRange**: Objekat sa info o cenama:
  - **lowest**: Najniža cena (float)
  - **highest**: Najviša cena (float)
  - **average**: Prosečna cena (float)
  - **difference**: Razlika (float)
  - **lowestShop**: Shop sa najnižom cenom (string)
  - **highestShop**: Shop sa najvišom cenom (string)
- **availability**: Dostupnost (enum: "in_stock", "limited_stock", "out_of_stock")
- **shopCount**: Broj shop-ova koji nude proizvod (integer)
- **lastUpdated**: Vreme poslednjeg update-a (ISO 8601)
- **trending**: Trend podataka (optional):
  - **direction**: Smer (enum: "up", "down", "stable")
  - **percentChange**: Procenat promene (float)
  - **period**: Period (string, "24h", "7d", "30d")

### Pagination
- **currentPage**: Trenutna stranica (integer)
- **totalPages**: Ukupan broj stranica (integer)
- **totalItems**: Ukupan broj proizvoda (integer)
- **itemsPerPage**: Broj po stranici (integer)
- **hasNextPage**: Da li ima sledeću stranicu (boolean)
- **hasPreviousPage**: Da li ima prethodnu stranicu (boolean)

### Filters
- **appliedCategory**: Trenutno primenjen filter (string)
- **appliedSortBy**: Trenutno primenjeno sortiranje (string)
- **availableCategories**: Array dostupnih kategorija sa brojem proizvoda

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "Nevalidni query parametri",
    "details": {
      "category": "Vrednost mora biti: gold_bars, gold_coins, silver_bars, silver_coins, all"
    },
    "statusCode": 400
  }
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "Došlo je do greške pri preuzimanju proizvoda",
    "statusCode": 500
  }
}
```

---

## Example Usage on Frontend

### Product Grid Component
```typescript
// Fetch products
const response = await fetch('/api/products?category=gold_bars&sortBy=price_asc');
const { data } = await response.json();

// Display products
data.products.map(product => (
  <ProductCard
    key={product.id}
    id={product.id}
    name={product.name}
    weight={product.weight}
    purity={product.purity}
    image={product.image}
    description={product.description}
    lowestPrice={product.priceRange.lowest}
    highestPrice={product.priceRange.highest}
  />
));
```

---

## Performance Notes

- **Response size**: ~5-10KB per page (20 items)
- **Cache duration**: 15-30 minutes
- **Database indexing**: Index na `category`, `lastUpdated`, `priceRange.lowest`
- **Lazy loading**: Images should be lazy loaded
- **Pagination**: Server-side pagination required

---

## Example cURL Requests

```bash
# Get all products
curl -X GET "https://api.goldara.com/api/products" \
  -H "Accept: application/json"

# Get gold bars sorted by price
curl -X GET "https://api.goldara.com/api/products?category=gold_bars&sortBy=price_asc" \
  -H "Accept: application/json"

# Get page 2 with 10 items
curl -X GET "https://api.goldara.com/api/products?page=2&limit=10" \
  -H "Accept: application/json"
```

---

**Verzija**: 1.0  
**Datum**: 2024-01-15  
**Status**: Draft for Implementation

