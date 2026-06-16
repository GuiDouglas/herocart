console.log("HeroCart Loaded");

(async () => {
  try {
    const response =
      await fetch("/cart.js");

    const cart =
      await response.json();

    console.log(
      "HeroCart Cart:",
      cart
    );
  } catch (error) {
    console.error(error);
  }
})();