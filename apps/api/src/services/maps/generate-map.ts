import { writeFile }
from "node:fs/promises";

import { getStore }
from "../stores/get-store";

import { getAccessToken }
from "../shopify/get-access-token";

import { fetchProducts }
from "../shopify/fetch-products";

import { buildSkuMap }
from "./build-sku-map";

export async function generateMap(
  storeId: string
) {
  const store =
    getStore(storeId);

  const accessToken =
    await getAccessToken(store);

  const products =
    await fetchProducts(
      store,
      accessToken
    );

  const {
    skuMap,
    missingSkus,
  } = buildSkuMap(products);

  await writeFile(
    `data/maps/${store.id}.json`,
    JSON.stringify(
      skuMap,
      null,
      2
    )
  );

  console.log(
    `\nMAP GERADO: ${store.id}\n`
  );

  console.log(
    JSON.stringify(
      skuMap,
      null,
      2
    )
  );

  console.log(
    "\nPRODUTOS SEM SKU\n"
  );

  console.log(
    missingSkus
  );
}