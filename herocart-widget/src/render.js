export function renderCartItems(cart) {
  const container =
    document.querySelector("#hc-items");

  if (!container) return;

  if (!cart.items.length) {
    renderEmptyCart();
    return;
  }

  container.innerHTML = cart.items
    .map(item => {
      const hasDiscount =
        item.original_line_price >
        item.final_line_price;

      const comparePrice =
        hasDiscount
          ? `$${(item.original_line_price / 100).toFixed(2)}`
          : item.compare_at_price
            ? `$${(item.compare_at_price / 100).toFixed(2)}`
            : "";

      const discount =
        item.original_line_price -
        item.final_line_price;

      return `
        <div class="hc-item">

          <div class="hc-item-media">
            <img
              class="hc-item-image"
              src="${item.image}"
              alt="${item.product_title}"
            />
          </div>

          <div class="hc-item-product">

            <h3 class="hc-item-title">
              ${item.product_title}
            </h3>

            <p class="hc-item-variant">
              ${item.variant_title || ""}
            </p>

            <div class="hc-quantity">
              <button
                class="hc-minus"
                data-key="${item.key}"
              >
                −
              </button>

              <span class="hc-quantity-value">
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

          <div class="hc-item-pricing">

            <button
              class="hc-remove"
              data-key="${item.key}"
            >
              Remove
            </button>

            ${
              comparePrice
                ? `
                  <div class="hc-compare-price">
                    ${comparePrice}
                  </div>
                `
                : ""
            }

            <div class="hc-item-subtotal">
              $${(item.final_line_price / 100).toFixed(2)}
            </div>

            ${
              discount > 0
                ? `
                  <div class="hc-item-discount">
                    Save $${(discount / 100).toFixed(2)}
                  </div>
                `
                : ""
            }

          </div>

        </div>
      `;
    })
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

    <h3>
      Your cart is empty
    </h3>

    <a
      href="/"
      class="hc-empty-button"
    >
      Continue shopping
    </a>

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

export function renderCheckoutButton(cart) {
  const button =
    document.querySelector(
      "#hc-checkout"
    );

    button.textContent =
    `Checkout • $${(
      cart.total_price / 100
    ).toFixed(2)}`; 
}