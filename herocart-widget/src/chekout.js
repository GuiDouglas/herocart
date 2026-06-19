export async function createCheckout(
  items
) {
  const response =
    await fetch(
      "https://nyoveo.com/checkout",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          items,
        }),
      }
    );

  if (!response.ok) {
    throw new Error(
      "Checkout creation failed"
    );
  }

  return response.json();
}

export async function redirectToCheckout(
  items
) {
  const result =
    await createCheckout(
      items
    );

  window.location.href =
    "/checkout";
}