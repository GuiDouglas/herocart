import { readFile } from "node:fs/promises";

export async function loadMap(
  storeId: string
) {
  return JSON.parse(
    await readFile(
      `data/maps/${storeId}.json`,
      "utf-8"
    )
  );
}