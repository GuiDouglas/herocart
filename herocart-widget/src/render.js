export function renderCartItems(cart) {

  const cartView =
    document.querySelector(
      "#hc-cart-view"
    );

  const emptyView =
    document.querySelector(
      "#hc-empty-view"
    );

  const container =
    document.querySelector(
      "#hc-items"
    );

  if (!container) {
    return;
  }

  if (!cart.items.length) {
    renderEmptyCart();
    return;
  }

  cartView?.classList.remove(
    "hc-hidden"
  );

  emptyView?.classList.add(
    "hc-hidden"
  );

  container.innerHTML = cart.items
    .map(item => {

      const comparePrice =
      item.compare_at_price >
      item.price
        ? `$${(
            item.compare_at_price * item.quantity / 100
          ).toFixed(2)}`
        : "";
      
      const saveAmount =
        item.compare_at_price >
        item.price
          ? (
              item.compare_at_price -
              item.price
            )
          : 0;

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

                  <div class="hc-item-save">
                    Save $${(
                      saveAmount * item.quantity/ 100
                    ).toFixed(2)}
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

  const cartView =
    document.querySelector(
      "#hc-cart-view"
    );

  const emptyView =
    document.querySelector(
      "#hc-empty-view"
    );

  cartView?.classList.add(
    "hc-hidden"
  );

  emptyView?.classList.remove(
    "hc-hidden"
  );
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

export function renderDiscountTag(
  cart
) {
  const container =
    document.querySelector(
      "#hc-discount-tag"
    );

  if (!container) {
    return;
  }

  if (
    !cart.discounts ||
    !cart.discounts.length
  ) {
    container.innerHTML = "";

    return;
  }

  container.innerHTML =
    cart.discounts
      .map(
        discount => `
          <div class="hc-discount-tag">
            ${discount.title}
          </div>
        `
      )
      .join("");
}

export function renderTotalSavings(
  cart
) {
  const savings =
    document.querySelector(
      "#hc-total-savings"
    );

  if (!savings) {
    return;
  }

  savings.textContent =
    `$${(
      cart.total_discount / 100
    ).toFixed(2)}`;
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