console.log("HeroCart Loaded");

async function main() {
  const response =
    await fetch("/cart.js");

  const cart =
    await response.json();

  const item =
    cart.items[0];

  const drawer =
    document.createElement("div");

  drawer.innerHTML = `
    <div>
      <img
        src="${item.image}"
        width="120"
      />

      <h3>
        ${item.product_title}
      </h3>

      <p>
        Qty: ${item.quantity}
      </p>

      <p>
        € ${(item.price / 100).toFixed(2)}
      </p>
    </div>
  `;

  document.body.appendChild(drawer);
}

main();