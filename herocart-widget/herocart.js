async function loadHeroCart() {
  const html = await fetch(
    "https://herocart.gui-alvesdouglas.workers.dev/"
  ).then(r => r.text());

  const root = document.createElement("div");

  root.id = "herocart-root";

  root.innerHTML = html;

  document.body.appendChild(root);

  const css =
    document.createElement("link");

  css.rel = "stylesheet";

  css.href =
    "https://herocart.gui-alvesdouglas.workers.dev/style.css";

  document.head.appendChild(css);

  await import(
    "https://herocart.gui-alvesdouglas.workers.dev/app.js"
  );
}

loadHeroCart();