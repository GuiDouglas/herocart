function extractVariantId(gid: string) {
  return gid.split("/").pop()!;
}

function normalizeSku(sku: string) {
  return sku.trim().toLowerCase();
}

export function buildSkuMap(products: any[]) {
  const skuMap: Record<string, string> = {};

  const missingSkus = new Set<string>();

  for (const product of products) {
    for (const variant of product.variants.nodes) {

      if (!variant.sku) {
        missingSkus.add(product.title);
        continue;
      }

      skuMap[
        normalizeSku(variant.sku)
      ] = extractVariantId(variant.id);
    }
  }

  return {
    skuMap,
    missingSkus: [...missingSkus],
  };
}