let cart = null;

export function getStoredCart() {
  return cart;
}

export function setStoredCart(
  newCart
) {
  cart = newCart;
}

export function clearStoredCart() {
  cart = 0;
}