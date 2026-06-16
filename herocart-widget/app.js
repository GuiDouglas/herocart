import { getCart }
from "./src/cart.js";

import {
  closeDrawer,
  openDrawer,
  renderCartItems
}
from "./src/render.js";

console.log("APP VERSION 3");

async function init() {
  const cart =
    await getCart();

  renderCartItems(cart);

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

  console.log(
    "HeroCart initialized"
  );
}

init();