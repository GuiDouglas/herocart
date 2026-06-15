import { Router } from "express";
import { createCheckout }
from "../services/checkout/create-checkout";

export const checkoutRouter = Router();

checkoutRouter.post(
  "/checkout",
  async (req, res) => {
    try {
      const {
        cart
      } = req.body;

      const url = await createCheckout(
        cart
      );

      res.json({
        checkoutUrl: url
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error: "checkout_error"
      });
    }
  }
);