import { getCart, updateCartBubble }
from "./src/cart.js";

import {
  renderCartItems,
  renderSubtotal
}
from "./src/render.js";

import {
  initDrawer
}
from "./src/drawer.js";

import {
  initQuantity
}
from "./src/quantity.js";

import {
  initInterceptors
}
from "./src/interceptors.js";

import {
  initRemove
} from "./src/remove.js";

import {
  renderPaymentMethods
} from "./src/payment-methods.js";
import { setStoredCart } from "./src/store.js";

async function init() {
  const cart =
    await getCart();

  setStoredCart(cart)

  renderCartItems(cart);

  renderSubtotal(cart);

  updateCartBubble(cart);

  initDrawer();

  initQuantity();

  initRemove();

  initInterceptors();

  const paymentMethods =
    document.querySelector(
      "#hc-payment-methods"
    );

  if (paymentMethods) {
    paymentMethods.innerHTML =
      renderPaymentMethods();
  }
}

init();