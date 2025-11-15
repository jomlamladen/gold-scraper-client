/**
 * ID Adapter - Konvertuje hex string ID u integer
 * Privremeno rešenje dok backend ne vrati integer ID direktno
 */

/**
 * Konvertuje hex string u integer za routing
 * "68dece9b7815e06440c23664" -> 23664 (koristi poslednja 4 karaktera)
 */
export function hexIdToInt(hexId: string): number {
  if (!hexId || hexId.length < 4) {
    return Math.floor(Math.random() * 10000); // fallback
  }
  
  // Uzmi poslednja 4 karaktera hex stringa i konvertuj u int
  const lastChars = hexId.slice(-4);
  return parseInt(lastChars, 16);
}

/**
 * Obrnuto - konvertuje integer nazad u hex ID ako treba
 * (za API calls kada frontend zna samo integer ID)
 */
export function intToHexId(intId: number, fullHexId?: string): string {
  if (fullHexId) return fullHexId; // ako imamo originalni ID, koristi ga
  
  // Generiši placeholder hex ID
  const hex = intId.toString(16).padStart(4, '0');
  return `68dece9b7815e06440c2${hex}`;
}

/**
 * Adapter za product list response
 */
export function adaptProductIds(products: any[]): any[] {
  return products.map(product => ({
    ...product,
    originalId: product.id, // sačuvaj original
    id: hexIdToInt(product.id) // pretvori u int
  }));
}

// Example usage:
// const response = await fetch('/api/products').then(r => r.json());
// response.data.products = adaptProductIds(response.data.products);

