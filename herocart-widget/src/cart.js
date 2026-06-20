import { getProduct } from "./products.js";

export async function getCart() {
  const response =
    await fetch("/cart.js");

  return response.json();
}

export async function enrichCart(cart) {
  const items = await Promise.all(
    cart.items.map(async (item) => {
      const product = await getProduct(item.handle);

      const variant = product.variants.find(
        v => v.id === item.variant_id
      );

      return {
        ...item,
        compare_at_price:
          variant.compare_at_price,
      };
    })
  );

  return {
    ...cart,
    items
  };
}

export async function updateQuantity(
  key,
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
        id: key,
        quantity
      })
    }
  );

  return getCart();
}

export async function removeItem(
  key
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
        id: key,
        quantity: 0
      })
    }
  );

  return getCart();
}

export function updateCartBubble(
  cart
) {
  const bubble =
    document.querySelector(
      ".cart-count-bubble span[aria-hidden='true']"
    );

  if (!bubble) {
    return;
  }

  const count =
    cart.items?.reduce(
      (total, item) =>
        total + item.quantity,
      0
    ) ?? 0;

    if (count <= 0) {
      bubble.parentElement?.classList.add(
        "hidden"
      );
    
      return;
    }
    
    bubble.parentElement?.classList.remove(
      "hidden"
    );  

  bubble.textContent =
    count;
}