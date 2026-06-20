import { Store } from "../../config/stores";

export async function fetchProducts(
  store: Store,
  accessToken: string
) {
  const response = await fetch(
    `https://${store.shop}.myshopify.com/admin/api/2026-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({
        query: `
          {
            products(first: 50) {
              nodes {
                title

                variants(first: 50) {
                  nodes {
                    id
                    sku
                  }
                }
              }
            }
          }
        `,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products (${response.status})`
    );
  }

  const json = await response.json();

  return json.data.products.nodes;
}