export function renderCartItems(cart) {
  const container =
    document.querySelector("#hc-items");

  if (!container) {
    return;
  }

  if (!cart.items.length) {
    renderEmptyCart();
    return;
  }

  container.innerHTML =
    cart.items
      .map(
        item => `
          <div class="hc-item">
            <img
              class="hc-item-image"
              src="${item.image}"
              alt="${item.product_title}"
            />

            <div class="hc-item-content">
              <h3>
                ${item.product_title}
              </h3>

              <p>
                Quantity:
                ${item.quantity}
              </p>

              <p>
                € ${(
                  item.price / 100
                ).toFixed(2)}
              </p>
            </div>
          </div>
        `
      )
      .join("");
}

export function renderEmptyCart() {
  const container =
    document.querySelector("#hc-items");

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="hc-empty">
      Your cart is empty
    </div>
  `;
}

export function openDrawer() {
  const drawer =
    document.querySelector("#hc-drawer");

  const overlay =
    document.querySelector("#hc-overlay");

  drawer?.classList.add("is-open");
  overlay?.classList.add("is-open");
}

export function closeDrawer() {
  const drawer =
    document.querySelector("#hc-drawer");

  const overlay =
    document.querySelector("#hc-overlay");

  drawer?.classList.remove("is-open");
  overlay?.classList.remove("is-open");
} 