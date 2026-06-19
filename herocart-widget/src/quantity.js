  import {
    updateCartBubble,
    updateQuantity
  } from "./cart.js";

  import {
    renderCartItems,
    renderSubtotal
  } from "./render.js";
import { getStoredCart, setStoredCart } from "./store.js";

  async function increaseQuantity(
    key
  ){
    const cart = getStoredCart()

    const item =
      cart.items.find(
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

    setStoredCart(updatedCart)
    renderCartItems(updatedCart);
    renderSubtotal(updatedCart);
    updateCartBubble(updatedCart);
  }

  async function decreaseQuantity(
    key
  ) {
    const cart = getStoredCart()
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

    const updatedCart =
      await updateQuantity(
        item.key,
        item.quantity - 1
      );

    setStoredCart(updatedCart)
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