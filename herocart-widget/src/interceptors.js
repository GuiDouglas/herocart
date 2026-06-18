import { getCart }
from "./cart.js";

import {
  renderCartItems,
  renderSubtotal
}
from "./render.js";

import {
  openDrawer
}
from "./drawer.js";
import { setStoredCart } from "./store.js";

export function initInterceptors() {
  const originalFetch =
    window.fetch;

  window.fetch =
    async (...args) => {
      const response =
        await originalFetch(...args);

      const url =
        args[0]?.url ||
        String(args[0]);

      if (
        url.includes("/cart/add")
      ) {
        const cart =
          await getCart();

        setStoredCart(cart)

        renderCartItems(cart);

        renderSubtotal(cart);

        openDrawer();
      }

      return response;
    };
}