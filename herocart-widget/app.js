import { getCart }
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

async function init() {
  const cart =
    await getCart();

  renderCartItems(cart);

  renderSubtotal(cart);

  initDrawer();

  initQuantity();

  initRemove();

  initInterceptors();
}

init();