import { getCart }
from "./src/cart.js";

import { closeDrawer, openDrawer, renderCartItems }
from "./src/render.js";

console.log("APP VERSION 2");

async function init() {
  const cart =
    await getCart();

  renderCartItems(cart);

  openDrawer();
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

  console.log("abriu e fechou")
}

init();