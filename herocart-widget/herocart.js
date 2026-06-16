import { getCart } from "./src/cart";
import {
  openDrawer,
  renderCartItems
} from "./src/render";

async function loadHeroCart() {
  const html = await fetch(
    "https://herocart.gui-alvesdouglas.workers.dev/"
  ).then(response =>
    response.text()
  );

  const root =
    document.createElement("div");

  root.id =
    "herocart-root";

  root.innerHTML =
    html;

  document.body.appendChild(root);

  const css =
    document.createElement("link");

  css.rel =
    "stylesheet";

  css.href =
    "https://herocart.gui-alvesdouglas.workers.dev/style.css";

  document.head.appendChild(css);

  const originalFetch =
    window.fetch;

  window.fetch =
    async (...args) => {
      const response =
        await originalFetch(...args);

      const url =
        args[0]?.url ||
        String(args[0]);

      if (
        url.includes("/cart/add")
      ) {
        const cart =
          await getCart();

        renderCartItems(cart);

        openDrawer();
      }

      return response;
    };

  await import(
    "https://herocart.gui-alvesdouglas.workers.dev/app.js"
  );
}

loadHeroCart();