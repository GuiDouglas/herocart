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

              <div class="hc-quantity">
                <button
                  class="hc-minus"
                  data-key="${item.key}"
                >
                  −
                </button>

                class="hc-quantity-value"
                  ${item.quantity}
                </span>

                <button
                  class="hc-plus"
                  data-key="${item.key}"
                >
                  +
                </button>
              </div>
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

  document.body.style.overflow =
    "hidden";
}

export function closeDrawer() {
  const drawer =
    document.querySelector("#hc-drawer");

  const overlay =
    document.querySelector("#hc-overlay");

  const body = document.body;

  drawer?.classList.remove("is-open");
  overlay?.classList.remove("is-open");
  body?.classList.remove("overflow-hidden");

  document.body.style.overflow =
    "";
} 

export function renderSubtotal(cart) {
  const subtotal =
    document.querySelector(
      "#hc-subtotal"
    );

  if (!subtotal) {
    return;
  }

  subtotal.textContent =
    `$${(
      cart.total_price / 100
    ).toFixed(2)}`;
}