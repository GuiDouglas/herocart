import { CheckoutItem } from "@shared/types";
import { SkuMap } from "@shared/types";
import { resolveSku } from "./resolve-sku";

export function buildCheckoutUrl(
  shopDomain: string,
  items: CheckoutItem[],
  skuMap: SkuMap
): string {
  const cartPath = items
    .map(item => {  
      const variantId = resolveSku(
        item.sku,
        skuMap
      );

      return `${variantId}:${item.quantity}`;
    })
    .join(",");

  return `https://${shopDomain}/cart/${cartPath}`;
}