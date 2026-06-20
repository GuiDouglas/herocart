import {
  removeItem, updateCartBubble
} from "./cart.js";

import {
  renderCartItems,
  renderSubtotal,
  renderTotalSavings
} from "./render.js";
import { clearStoredCart } from "./store.js";

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

      clearStoredCart()

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