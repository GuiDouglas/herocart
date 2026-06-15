import { SkuMap } from "@shared/types";

export function resolveSku(
  sku: string,
  skuMap: SkuMap
): string {
  const variantId = skuMap[sku];

  if (!variantId) {
    throw new Error(`SKU not found: ${sku}`);
  }
  

  return variantId;
}