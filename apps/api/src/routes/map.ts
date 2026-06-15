import { readFile } from "node:fs/promises";
import { Router } from "express";

const router = Router();

router.get("/map.json", async (_, res) => {
  try {
    const map = await readFile(
      "data/map.json",
      "utf-8"
    );

    res.setHeader(
      "Content-Type",
      "application/json"
    );

    res.send(map);
  } catch {
    res.status(500).json({
      error: "map.json not found",
    });
  }
});

export { router as mapRouter };