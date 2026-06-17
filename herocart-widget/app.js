import { getCart }
from "./src/cart.js";

import {
  updateQuantity
} from "./src/cart.js";

import {
  closeDrawer,
  openDrawer,
  renderCartItems,
  renderSubtotal
}
from "./src/render.js";

console.log("APP VERSION 3");

async function init() {
  const cart =
    await getCart();

  renderCartItems(cart);
  renderSubtotal(cart)

  document
    .querySelector("#hc-close")
    ?.addEventListener(
      "click",
      closeDrawer
    );

  document
    .querySelector("#hc-overlay")
    ?.addEventListener(
      "click",
      closeDrawer
    );

  document.addEventListener(
    "click",
    event => {
      const cartButton =
        event.target.closest(
          "#cart-icon-bubble"
        );

      if (!cartButton) {
        return;
      }

      event.preventDefault();

      openDrawer();
    }
  );

  document.addEventListener(
    "click",
    async event => {
      const plus =
        event.target.closest(
          ".hc-plus"
        );
  
      if (!plus) {
        return;
      }
  
      const variantId =
        Number(
          plus.dataset.variantId
        );
  
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
  );

  document.addEventListener(
    "click",
    async event => {
      const minus =
        event.target.closest(
          ".hc-minus"
        );
  
      if (!minus) {
        return;
      }
  
      const variantId =
        Number(
          minus.dataset.variantId
        );
  
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
          item.quantity - 1
        );
  
      renderCartItems(
        updatedCart
      );
  
      renderSubtotal(
        updatedCart
      );
    }
  );

  console.log(
    "HeroCart initialized"
  );
}

init();