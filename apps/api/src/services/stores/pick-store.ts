import { stores } from "../../config/stores";

export function pickStore() {
  const totalWeight = stores.reduce(
    (sum, store) => sum + store.weight,
    0
  );

  const random =
    Math.random() * totalWeight;

  let current = 0;

  for (const store of stores) {
    current += store.weight;

    if (random < current) {
      return store;
    }
  }

  return stores[0];
}