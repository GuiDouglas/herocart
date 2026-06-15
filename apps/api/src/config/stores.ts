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
    id: "store-b",
    checkoutDomain: "loja-b.myshopify.com",

    shop: "150x5b-kz",

    clientId: env.clientId,
    clientSecret: env.clientSecret,

    weight: 70,
  },

  {
    id: "store-c",
    checkoutDomain: "loja-c.myshopify.com",

    shop: "store-c",

    clientId: env.clientId,
    clientSecret: env.clientSecret,

    weight: 30,
  },
];