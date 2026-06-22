import { pickStore } from "../services/stores/pick-store";

const results: Record<string, number> = {};

for (let i = 0; i < 100000; i++) {
  const store = pickStore();

  results[store.id] =
    (results[store.id] ?? 0) + 1;
}

console.log(results);