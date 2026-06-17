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

  drawer?.classList.remove("is-open");
  overlay?.classList.remove("is-open");

  document.body.style.overflow =
    "";
}

export function initDrawer() {
  document
    .querySelector("#hc-close")
    ?.addEventListener(
      "click",
      closeDrawer
    );

  document
    .querySelector("#hc-overlay")
    ?.addEventListener(
      "click",
      closeDrawer
    );

  document.addEventListener(
    "click",
    event => {
      const cartButton =
        event.target.closest(
          "#cart-icon-bubble"
        );

      if (!cartButton) {
        return;
      }

      event.preventDefault();

      openDrawer();
    }
  );
}