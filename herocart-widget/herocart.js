console.log("HeroCart Loaded");

(async () => {
  try {
    const response =
      await fetch("/cart.js");

    const cart =
      await response.json();

      console.log(JSON.stringify(
        cart.items[0],
        null,
        2
      ));
  } catch (error) {
    console.error(error);
  }
})();