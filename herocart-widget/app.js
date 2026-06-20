import { enrichCart, getCart, updateCartBubble }
from "./src/cart.js";

import {
  renderCartItems,
  renderCheckoutButton,
  renderSubtotal,
  renderTotalSavings
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
import { getStoredCart, setStoredCart } from "./src/store.js";
import { redirectToCheckout } from "./src/chekout.js";

async function init() {
  const cart =
    await getCart();

  const enrichedCart =
    await enrichCart(cart); 

  setStoredCart(enrichedCart)

  renderCartItems(enrichedCart);

  renderTotalSavings(enrichedCart);

  renderSubtotal(cart);

  renderCheckoutButton(enrichedCart);

  updateCartBubble(enrichedCart);

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

document
  .querySelector(
    "#hc-checkout"
  )
  ?.addEventListener(
    "click",
    async () => {
      const cart =
        getStoredCart();

      await redirectToCheckout(
        cart.items
      );
    }
  );