import {
  removeItem
} from "./cart.js";

import {
  renderCartItems,
  renderSubtotal,
  renderTotalSavings
} from "./render.js";
import { setStoredCart } from "./store.js";

export function initRemove() {
  document.addEventListener(
    "click",
    async event => {
      const button =
        event.target.closest(
          ".hc-remove"
        );

      if (!button) {
        return;
      }

      const updatedCart =
        await removeItem(
          button.dataset.key
        );

      setStoredCart(updatedCart)

      renderCartItems(
        updatedCart
      );

      renderTotalSavings(
        updatedCart
      )

      renderSubtotal(
        updatedCart
      );

      updateCartBubble(
        updatedCart
      );
    }
  );
}