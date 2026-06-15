import {
  CheckoutItem,
  buildCheckoutUrl
} from "@herocart/core";

import { loadMap }
from "../maps/load-map";

import { pickStore } from "../stores/pick-store";

export async function createCheckout(
  cart: CheckoutItem[]
) {
  const store =
    pickStore();

  const map =
    await loadMap(store.id);

  return buildCheckoutUrl(
    store.checkoutDomain,
    cart,
    map
  );
}