import { env } from "./env";

export interface Store {
  id: string;
  checkoutDomain: string;
  
  shop: string;
  
  clientId: string;
  clientSecret: string;

  weight: number;
}

export const stores: Store[] = [
  {
    id: "store-a",
    checkoutDomain: "150x5b-kz.myshopify.com",

    shop: "150x5b-kz",

    clientId: env.clientId,
    clientSecret: env.clientSecret,

    weight: 50,
  },
  {
    id: "store-b",
    checkoutDomain: "7ypkcq-9p.myshopify.com",

    shop: "7ypkcq-9p",

    clientId: env.clientIdB,
    clientSecret: env.clientSecretB,

    weight: 50,
  }
];