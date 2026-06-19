const productCache = new Map();

export async function getProduct(handle) {
  if (productCache.has(handle)) {
    return productCache.get(handle);
  }

  const product = await fetch(
    `/products/${handle}.js`
  ).then(r => r.json());

  productCache.set(handle, product);

  return product;
}