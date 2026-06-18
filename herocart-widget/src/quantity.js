import { currentCart } from "../app.js";
import {
  getCart,
  updateQuantity
} from "./cart.js";

import {
  renderCartItems,
  renderSubtotal
} from "./render.js";

async function increaseQuantity(
  key
) {
  const item =
    currentCart.items.find(
      item =>
        item.key === key
    );
    

  if (!item) {
    return;
  }

  const updatedCart =
    await updateQuantity(
      item.key,
      item.quantity + 1
    );

  renderCartItems(updatedCart);
  renderSubtotal(updatedCart);
  updateCartBubble(updatedCart);
}

async function decreaseQuantity(
  key
) {
  const cart =
    await getCart();

  const item =
    currentCart.items.find(
      item =>
        item.key === key
    );

  if (!item) {
    return;
  }

  if (item.quantity <= 1) {
    return;
  }

  const updatedCart =
    await updateQuantity(
      item.key,
      item.quantity - 1
    );

  renderCartItems(updatedCart);
  renderSubtotal(updatedCart);
  updateCartBubble(updatedCart);
}

export function initQuantity() {

  document.addEventListener(
    "click",
    async event => {
      const plus =
        event.target.closest(
          ".hc-plus"
        );

      if (plus) {
        await increaseQuantity(
          plus.dataset.key
        );

        return;
      }

      const minus =
        event.target.closest(
          ".hc-minus"
        );

      if (minus) {
        await decreaseQuantity(
          minus.dataset.key
        );
      }
    }
  );
}