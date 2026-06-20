import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
})

export const env = {
  shopDomain: process.env.SHOP_DOMAIN!,
  clientId: process.env.SHOPIFY_CLIENT_ID!,
  clientSecret: process.env.SHOPIFY_CLIENT_SECRET!,
  shopDomainB: process.env.SHOP_DOMAIN_B!,
  clientIdB: process.env.SHOPIFY_CLIENT_ID_B!,
  clientSecretB: process.env.SHOPIFY_CLIENT_SECRET_B!,
};