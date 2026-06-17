import {
  getCart,
  updateQuantity
} from "./cart.js";

import {
  renderCartItems,
  renderSubtotal
} from "./render.js";

async function increaseQuantity(
  variantId
) {
  const cart =
    await getCart();

  const item =
    cart.items.find(
      item =>
        item.variant_id ===
        variantId
    );

  if (!item) {
    return;
  }

  const updatedCart =
    await updateQuantity(
      variantId,
      item.quantity + 1
    );

  renderCartItems(
    updatedCart
  );

  renderSubtotal(
    updatedCart
  );
}

async function decreaseQuantity(
  variantId
) {
  const cart =
    await getCart();

  const item =
    cart.items.find(
      item =>
        item.variant_id ===
        variantId
    );

  if (!item) {
    return;
  }

  if (
    item.quantity <= 1
  ) {
    return;
  }

  const updatedCart =
    await updateQuantity(
      variantId,
      item.quantity - 1
    );

  renderCartItems(
    updatedCart
  );

  renderSubtotal(
    updatedCart
  );
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
          Number(
            plus.dataset.variantId
          )
        );

        return;
      }

      const minus =
        event.target.closest(
          ".hc-minus"
        );

      if (minus) {
        await decreaseQuantity(
          Number(
            minus.dataset.variantId
          )
        );
      }
    }
  );
}