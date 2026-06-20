import {
  enrichCart,
  updateCartBubble,
  updateQuantity
} from "./cart.js";

import {
  renderCartItems,
  renderCheckoutButton,
  renderSubtotal,
  renderTotalSavings
} from "./render.js";

import {
  getStoredCart,
  setStoredCart
} from "./store.js";

async function increaseQuantity(
  key
) {
  const cart =
    getStoredCart();

  const item =
    cart.items.find(
      item =>
        item.key === key
    );

  if (!item) {
    return;
  }

  item.quantity += 1;

  renderCartItems(cart);
  renderTotalSavings(cart);
  renderSubtotal(cart);
  updateCartBubble(cart);

  try {
    const updatedCart =
      await updateQuantity(
        item.key,
        item.quantity
      );

    const enrichedCart =
      await enrichCart(
        updatedCart
      );

    setStoredCart(
      enrichedCart
    );

    renderCartItems(
      enrichedCart
    );

    renderTotalSavings(
      enrichedCart
    );

    renderSubtotal(
      enrichedCart
    );

    renderCheckoutButton(
      enrichedCart
    )

    updateCartBubble(
      enrichedCart
    );
  } catch (error) {
    console.error(error);
  }
}

async function decreaseQuantity(
  key
) {
  const cart =
    getStoredCart();

  const item =
    cart.items.find(
      item =>
        item.key === key
    );

  if (!item) {
    return;
  }

  if (item.quantity <= 1) {
    return;
  }

  item.quantity -= 1;

  renderCartItems(cart);
  renderTotalSavings(cart);
  renderSubtotal(cart);
  updateCartBubble(cart);

  try {
    const updatedCart =
      await updateQuantity(
        item.key,
        item.quantity
      );

    const enrichedCart =
      await enrichCart(
        updatedCart
      );

    setStoredCart(
      enrichedCart
    );

    renderCartItems(
      enrichedCart
    );

    renderTotalSavings(
      enrichedCart
    );

    renderSubtotal(
      enrichedCart
    );

    renderCheckoutButton(
      enrichedCart
    )

    updateCartBubble(
      enrichedCart
    );
  } catch (error) {
    console.error(error);
  }
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