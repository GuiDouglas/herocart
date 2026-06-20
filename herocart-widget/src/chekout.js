import { getStoredCart } from "./store.js";

export async function createCheckout(
  cart
) {
  const response =
    await fetch(
      "https://api.nyoveo.com/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          cart
        })
      }
    );

  if (!response.ok) {
    throw new Error(
      "Checkout creation failed"
    );
  }

  return response.json();
}

export async function redirectToCheckout() {
  const cart =
    getStoredCart();

  console.log(
    "Incoming cart:",
    cart 
  )

  const result =
    await createCheckout(
      cart.items
    );

  window.location.href = result.checkoutUrl;
}