export async function getCart() {
  const response =
    await fetch("/cart.js");

  return response.json();
}

export async function updateQuantity(
  variantId,
  quantity
) {
  await fetch(
    "/cart/change.js",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        id: variantId,
        quantity
      })
    }
  );

  return getCart();
}