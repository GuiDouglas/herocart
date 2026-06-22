export interface Store {
    id: number;
    name: string;
    domain: string;
    accessToken: string;
    createdAt: string;
}
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
