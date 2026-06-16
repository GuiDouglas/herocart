console.log("HeroCart Loaded");

async function main() {
  console.log("Step 1");

  const response =
    await fetch("/cart.js");

  console.log("Step 2");

  const cart =
    await response.json();

  console.log("Step 3", cart);

  const item =
    cart.items[0];

  console.log("Step 4", item);

  const drawer =
    document.createElement("div");

  drawer.style.position = "fixed";
  drawer.style.top = "20px";
  drawer.style.right = "20px";
  drawer.style.background = "white";
  drawer.style.border = "1px solid black";
  drawer.style.padding = "20px";
  drawer.style.zIndex = "999999";

  drawer.innerHTML = `
    <div>
      HERO CART TEST
    </div>
  `;

  document.body.appendChild(drawer);

  console.log("Step 5");
}

main();