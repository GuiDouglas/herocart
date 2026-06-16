async function loadHeroCart() {
  const html = await fetch(
    "https://herocart.gui-alvesdouglas.workers.dev/index.html"
  ).then(r => r.text());

  document.addEventListener("click", event => {
    console.log(
      event.target,
      event.target.closest("a"),
      event.target.closest("button")
    );
  });

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