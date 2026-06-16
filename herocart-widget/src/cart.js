export async function getCart() {
  const response =
    await fetch("/cart.js");

  return response.json();
}