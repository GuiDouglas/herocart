import { stores }
from "../config/stores";

import { generateMap }
from "../services/maps/generate-map";

async function main() {
  for (const store of stores) {
    try {
      await generateMap(store.id);
  
      console.log(
        `✓ ${store.id}`
      );
    } catch (error) {
      console.error(
        `✗ ${store.id}`,
        error
      );
    }
  }
}

main().catch(console.error);