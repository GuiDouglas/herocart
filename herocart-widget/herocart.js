async function loadHeroCart() {
  const html = await fetch(
    "https://herocart.gui-alvesdouglas.workers.dev/"
  ).then(r => r.text());

  const css =
    document.createElement("link");

  css.rel = "stylesheet";

  css.href =
    "https://herocart.gui-alvesdouglas.workers.dev/style.css";

  document.head.appendChild(css);

  await new Promise(resolve => {
    css.onload = resolve
  })

  const root = document.createElement("div");

  root.id = "herocart-root";

  root.innerHTML = html;

  document.body.appendChild(root);


  await import(
    "https://herocart.gui-alvesdouglas.workers.dev/app.js"
  );
}

loadHeroCart();