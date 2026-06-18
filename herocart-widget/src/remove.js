import {
  removeItem
} from "./cart.js";

import {
  renderCartItems,
  renderSubtotal
} from "./render.js";

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

      renderCartItems(
        updatedCart
      );

      renderSubtotal(
        updatedCart
      );

      updateCartBubble(
        updatedCart
      );
    }
  );
}