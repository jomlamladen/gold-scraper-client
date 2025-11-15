# API Specifikacija - Goldara Product Detail

## Endpoint: Get Single Product

### Request

```
GET /api/products/{id}
```

**Path Parameters:**
- `id` (integer, required): Jedinstveni identifikator proizvoda

**Example Request:**
```
GET /api/products/1
```

---

## Response Structure

### Success Response (200 OK)

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Zlatna poluga Argor Heraeus 5g",
    "weight": "5g",
    "purity": "999.9",
    "image": "/images/gold-bar-5g.jpg",
    "description": "Certificirana zlatna poluga od 5 grama",
    "category": "gold_bars",
    "lastUpdated": "2024-01-15T10:30:00Z",
    "priceData": [
      {
        "shop": "GoldHub.net",
        "shopUrl": "https://goldhub.net",
        "price": 14200,
        "pricePerGram": 2840,
        "updatedAt": "Pre 2h",
        "availability": "in_stock",
        "shippingInfo": "Besplatna dostava",
        "rating": 4.8
      },
      {
        "shop": "GoldShop.rs",
        "shopUrl": "https://goldshop.rs",
        "price": 14350,
        "pricePerGram": 2870,
        "updatedAt": "Pre 1h",
        "availability": "in_stock",
        "shippingInfo": "Dostava 300 RSD",
        "rating": 4.5
      },
      {
        "shop": "MetalStore.com",
        "shopUrl": "https://metalstore.com",
        "price": 14480,
        "pricePerGram": 2896,
        "updatedAt": "Pre 30min",
        "availability": "limited_stock",
        "shippingInfo": "Besplatna dostava preko 10.000 RSD",
        "rating": 4.7
      },
      {
        "shop": "PreciousMetal.co",
        "shopUrl": "https://preciousmetal.co",
        "price": 14600,
        "pricePerGram": 2920,
        "updatedAt": "Pre 18m",
        "availability": "in_stock",
        "shippingInfo": "Dostava 250 RSD",
        "rating": 4.9
      },
      {
        "shop": "Aypym.rs",
        "shopUrl": "https://aypym.rs",
        "price": 14120,
        "pricePerGram": 2824,
        "updatedAt": "Pre 45min",
        "availability": "in_stock",
        "shippingInfo": "Besplatna dostava",
        "rating": 4.6
      }
    ],
    "historicalData": {
      "period": "12_months",
      "dataPoints": [
        {
          "date": "2024-01-15",
          "month": "Jan",
          "shops": {
            "GoldHub.net": 14200,
            "GoldShop.rs": 14350,
            "MetalStore.com": 14480,
            "PreciousMetal.co": 14600,
            "Aypym.rs": 14120
          },
          "average": 14350,
          "lowest": 14120,
          "highest": 14600
        },
        {
          "date": "2024-02-15",
          "month": "Feb",
          "shops": {
            "GoldHub.net": 14150,
            "GoldShop.rs": 14300,
            "MetalStore.com": 14420,
            "PreciousMetal.co": 14550,
            "Aypym.rs": 14080
          },
          "average": 14300,
          "lowest": 14080,
          "highest": 14550
        }
        // ... ostali meseci (ukupno 12)
      ]
    },
    "shopHistoricalData": [
      {
        "shop": "GoldHub.net",
        "period": "3_months",
        "dataPoints": [
          {
            "date": "2024-01-15",
            "dateLabel": "15. jan",
            "price": 14200,
            "high": 14300,
            "low": 14100,
            "average": 14200
          },
          {
            "date": "2024-01-18",
            "dateLabel": "18. jan",
            "price": 14180,
            "high": 14280,
            "low": 14080,
            "average": 14180
          }
          // ... ostali dani (svaki 3. dan za 90 dana = 30 poena)
        ],
        "statistics": {
          "lowest": 14080,
          "highest": 14300,
          "average": 14190,
          "variance": 220
        }
      }
      // ... za svaki shop
    ],
    "heatmapData": [
      {
        "shop": "GoldHub.net",
        "year": 2024,
        "dataPoints": [
          {
            "date": "2024-01-01",
            "dayOfWeek": 1,
            "weekNumber": 0,
            "price": 14200,
            "intensity": 2,
            "priceChange": 0,
            "percentChange": 0
          },
          {
            "date": "2024-01-02",
            "dayOfWeek": 2,
            "weekNumber": 0,
            "price": 14180,
            "intensity": 1,
            "priceChange": -20,
            "percentChange": -0.14
          }
          // ... za svih 365 dana
        ]
      }
      // ... za svaki shop
    ],
    "priceAnalytics": {
      "currentLowest": {
        "shop": "Aypym.rs",
        "price": 14120,
        "pricePerGram": 2824,
        "updatedAt": "Pre 45min"
      },
      "currentHighest": {
        "shop": "PreciousMetal.co",
        "price": 14600,
        "pricePerGram": 2920,
        "updatedAt": "Pre 18m"
      },
      "currentAverage": 14350,
      "priceDifference": 480,
      "priceVariancePercent": 3.4,
      "recommendedShop": "Aypym.rs",
      "savingsVsAverage": 230,
      "savingsVsHighest": 480
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

## Field Descriptions

### Product Basic Info
- **id**: Jedinstveni ID proizvoda (integer)
- **name**: Naziv proizvoda (string)
- **weight**: Težina proizvoda (string, npr. "5g", "10g", "1oz")
- **purity**: Čistoća zlata (string, npr. "999.9", "995", "916")
- **image**: URL slike proizvoda (string)
- **description**: Kratak opis proizvoda (string)
- **category**: Kategorija proizvoda (enum: "gold_bars", "gold_coins", "silver_bars", "silver_coins")
- **lastUpdated**: Timestamp poslednje izmene (ISO 8601)

### Price Data (Current Prices)
- **shop**: Naziv prodavnice (string)
- **shopUrl**: URL prodavnice (string)
- **price**: Trenutna cena u RSD (integer/float)
- **pricePerGram**: Cena po gramu u RSD (float)
- **updatedAt**: Kada je cena ažurirana - relativan string (string, npr. "Pre 2h", "Pre 30min")
- **availability**: Status dostupnosti (enum: "in_stock", "limited_stock", "out_of_stock", "pre_order")
- **shippingInfo**: Info o dostavi (string, optional)
- **rating**: Rejting prodavnice (float, 0-5, optional)

### Historical Data (12 meseci - za glavni line chart)
- **period**: Period podataka (string, "12_months")
- **dataPoints**: Array objekata sa:
  - **date**: Datum u ISO formatu (string)
  - **month**: Mesec za prikaz (string, npr. "Jan", "Feb", "Mar")
  - **shops**: Objekat gde je key naziv shopa, value cena (object)
  - **average**: Prosečna cena tog meseca (float)
  - **lowest**: Najniža cena tog meseca (float)
  - **highest**: Najviša cena tog meseca (float)

### Shop Historical Data (3 meseca - za expandable shop charts)
- **shop**: Naziv prodavnice (string)
- **period**: Period podataka (string, "3_months")
- **dataPoints**: Array objekata sa:
  - **date**: Datum u ISO formatu (string)
  - **dateLabel**: Formatiran datum za prikaz (string, npr. "15. jan")
  - **price**: Glavna cena (float)
  - **high**: Najviša cena tog dana (float)
  - **low**: Najniža cena tog dana (float)
  - **average**: Prosek (float)
- **statistics**: Statistika za period:
  - **lowest**: Najniža cena u periodu (float)
  - **highest**: Najviša cena u periodu (float)
  - **average**: Prosečna cena (float)
  - **variance**: Razlika highest - lowest (float)

### Heatmap Data (365 dana - za heatmap prikaz)
- **shop**: Naziv prodavnice (string)
- **year**: Godina (integer, 2024)
- **dataPoints**: Array objekata sa:
  - **date**: Datum u ISO formatu (string)
  - **dayOfWeek**: Dan u nedelji (integer, 0=Nedelja, 6=Subota)
  - **weekNumber**: Broj nedelje u godini (integer, 0-52)
  - **price**: Cena (float)
  - **intensity**: Nivo intenziteta za heatmap (integer, 0-4)
    - 0 = bez podataka / minimalna promena
    - 1 = mala promena (0-5%)
    - 2 = umerena promena (5-10%)
    - 3 = velika promena (10-15%)
    - 4 = ekstremna promena (>15%)
  - **priceChange**: Promena cene vs. prethodni dan (float, optional)
  - **percentChange**: Procenat promene (float, optional)

### Price Analytics (Statistika i preporuke)
- **currentLowest**: Objekat sa podacima o najjeftinijoj trenutnoj ceni
- **currentHighest**: Objekat sa podacima o najskupljoj trenutnoj ceni
- **currentAverage**: Prosečna trenutna cena (float)
- **priceDifference**: Razlika između najviše i najniže (float)
- **priceVariancePercent**: Procenat varijacije (float)
- **recommendedShop**: Preporučena prodavnica (string)
- **savingsVsAverage**: Ušteda vs prosek (float)
- **savingsVsHighest**: Ušteda vs najviša (float)

### Metadata
- **totalShops**: Broj prodavnica (integer)
- **lastScrapeTime**: Vreme poslednjeg scrapinga (ISO 8601)
- **nextUpdateIn**: Vreme do sledećeg update-a (string, npr. "30 minutes")
- **dataQuality**: Kvalitet podataka (enum: "excellent", "good", "fair", "poor")
- **scrapingStatus**: Status scrapinga (enum: "active", "paused", "error")

---

## Error Responses

### 404 Not Found
```json
{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Proizvod sa ID 999 nije pronađen",
    "statusCode": 404
  }
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "Došlo je do greške pri preuzimanju podataka",
    "statusCode": 500
  }
}
```

---

## Implementation Notes

### Frontend Data Usage

1. **Header Section**:
   - `name`, `weight`, `purity`, `image`, `description`
   - `lastUpdated` → formatiran kao relativno vreme

2. **Stats Grid (4 kartice)**:
   - `priceAnalytics.currentLowest` → Najniža cena
   - `priceAnalytics.currentAverage` → Prosečna cena
   - `priceAnalytics.currentHighest` → Najviša cena
   - `priceAnalytics.priceDifference` → Razlika

3. **Price List (shop items)**:
   - `priceData[]` → lista prodavnica sa trenutnim cenama
   - Klik na shop → expanduje i prikazuje `shopHistoricalData` za taj shop
   - Tab "Line" → 3-mesečni line chart
   - Tab "Heatmap" → godišnji heatmap sa `heatmapData`

4. **Main Charts**:
   - **Istorija cena (12 meseci)**: `historicalData` → multi-line chart
   - **Distribucija cena**: `priceData[]` → bar chart
   - **Cena po gramu**: `priceData[]` → composed chart (area + line + bars)

### Backend Requirements

1. **Data Scraping**: Redovno ažuriranje cena sa svih shop-ova
2. **Historical Tracking**: Čuvanje istorijskih podataka za sve periode
3. **Caching**: Caching mehanizam da se ne fetchuje svaki put sve
4. **Rate Limiting**: Kontrola frekvencije poziva prema shop-ovima
5. **Data Validation**: Validacija scraped podataka
6. **Fallback**: Fallback na cached podatke ako scraping ne uspe

### Performance Considerations

- Response size: ~50-100KB (sa svim podacima)
- Recommended cache: 15-30 minuta
- Heatmap data može biti optional (lazy load)
- Shop historical data može biti on-demand (kada se klikne na shop)

---

## Alternative: Paginated/Split Endpoints

Ako je response prevelik, može se podeliti:

```
GET /api/products/{id}              → osnovni podaci + priceData
GET /api/products/{id}/historical   → historical & heatmap data
GET /api/products/{id}/shop/{shopId}/history → single shop history
```

---

## Example cURL Request

```bash
curl -X GET "https://api.goldara.com/api/products/1" \
  -H "Accept: application/json" \
  -H "Content-Type: application/json"
```

---

## Notes for Backend Team

- Svi datumi u **ISO 8601 format** (YYYY-MM-DDTHH:mm:ssZ)
- Cene u **RSD** kao integer/float (bez "RSD" stringa)
- `updatedAt` u relativnom formatu ("Pre 2h") - može backend ili frontend da formatira
- Intensity za heatmap se može kalkulisati na backend-u na osnovu price variation
- Shop colors su hardkodirane na frontend-u, ne treba ih slati

---

**Verzija**: 1.0  
**Datum**: 2024-01-15  
**Status**: Draft for Implementation

