import { getCart }
from "./src/cart.js";

import { closeDrawer, openDrawer, renderCartItems }
from "./src/render.js";

console.log("APP VERSION 2");

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

  console.log("abriu e fechou")

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
    event => {
      const button =
        event.target.closest(
          'button[name="add"]'
        );
  
      if (!button) {
        return;
      }
  
      setTimeout(async () => {
        const cart =
          await getCart();
  
        renderCartItems(cart);
  
        openDrawer();
      }, 1000);
    }
  );
}

init();