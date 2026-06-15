export interface Store {
  id: number;
  name: string;
  domain: string;         
  accessToken: string;
  createdAt: string;
}

// Mapa que o herocart.js vai consumir via GET /map.json
// { "SKU-001": "12345678", "SKU-002": "98765432" }
export type SkuMap = Record<string, string>;

export interface CheckoutItem {
  sku: string;
  quantity: number;
}

export interface CheckoutRequest {
  cart: CheckoutItem[];
}

export interface CheckoutResponse {
  checkoutUrl: string;
}

export interface CartItem {
  sku: string;
  quantity: number;
}