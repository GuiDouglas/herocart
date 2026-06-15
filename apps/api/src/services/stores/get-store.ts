import { stores }
from "../../config/stores";

export function getStore(
  storeId: string
) {
  const store = stores.find(
    store => store.id === storeId
  );

  if (!store) {
    throw new Error(
      `Store not found: ${storeId}`
    );
  }

  return store;
}