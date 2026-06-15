import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
})

export const env = {
  shopDomain: process.env.SHOP_DOMAIN!,
  clientId: process.env.SHOPIFY_CLIENT_ID!,
  clientSecret: process.env.SHOPIFY_CLIENT_SECRET!,
};