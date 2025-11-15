# 🚀 Quick Start - API Integration

## TL;DR

**Samo otvori `lib/api-config.ts` i promeni:**

```typescript
export const USE_MOCK_DATA = true;   // 🔵 Mock data (bez backend-a)
export const USE_MOCK_DATA = false;  // 🟢 Real API (sa backend-om)
```

**I to je sve!** 🎉

---

## 🔵 MOCK MODE (Development bez backend-a)

```typescript
// lib/api-config.ts
export const USE_MOCK_DATA = true;
```

```bash
npm run dev
# ✅ Aplikacija radi!
# ✅ Koristi mock podatke
# ✅ Nema potrebe za backend-om
```

**Koristi za:**
- Frontend development
- UI testing
- Demo bez backend-a
- Kad backend ne radi

---

## 🟢 REAL API MODE (Sa backend-om)

```typescript
// lib/api-config.ts
export const USE_MOCK_DATA = false;
```

```bash
# 1. Pokreni backend
cd backend
python app.py

# Backend mora biti na: http://localhost:5001

# 2. Pokreni frontend
npm run dev

# ✅ Aplikacija fetchu je podatke sa backend-a!
```

**Koristi za:**
- Integration testing
- Production
- Real data testing

---

## 🔍 Kako proveriti koji mode radi?

Otvori **Browser Console** (F12):

```
[API Config] 🔵 MOCK MODE
```
ili
```
[API Config] 🟢 REAL API MODE
```

---

## 📡 Backend Endpoints

```
GET http://localhost:5001/api/products
GET http://localhost:5001/api/product/1
GET http://localhost:5001/api/product/2
```

---

## ❓ Troubleshooting

### "Failed to load products"

**1. Check da li backend radi:**
```bash
curl http://localhost:5001/api/products
```

**2. Ako backend ne radi, vrati se na mock:**
```typescript
// lib/api-config.ts
export const USE_MOCK_DATA = true;
```

---

## 📚 Full Documentation

- **Quick Guide**: `QUICK_START_API.md` (ovaj file)
- **Integration Guide**: `API_INTEGRATION_README.md`
- **Summary**: `API_INTEGRATION_SUMMARY.md`
- **Backend Spec**: `API_SPECIFICATION.md`, `API_SPECIFICATION_LIST.md`

---

## ✅ Checklist

- [ ] Otvorio `lib/api-config.ts`
- [ ] Promenio `USE_MOCK_DATA` flag
- [ ] (Ako je real mode) Pokrenuo backend
- [ ] Pokrenuo `npm run dev`
- [ ] Proverio console za "[API Config]" poruku
- [ ] Testirao products list
- [ ] Testirao product detail page
- [ ] Testirao price history section (gold data)

---

## 🎯 Koje komponente su integrisane?

✅ **`components/product-grid.tsx`** - Lista proizvoda
✅ **`app/products/[id]/page.tsx`** - Detalji proizvoda  
✅ **`components/price-history-section.tsx`** - Gold price history

Sve tri komponente respektuju `USE_MOCK_DATA` flag! 🎉

---

**That's it! Enjoy! 🎉**

