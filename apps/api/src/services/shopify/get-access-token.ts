import { Store }
from "../../config/stores";

export async function getAccessToken(
  store: Store
) {
  const response = await fetch(
    `https://${store.shop}.myshopify.com/admin/oauth/access_token`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        grant_type:
          "client_credentials",

        client_id:
          store.clientId,

        client_secret:
          store.clientSecret,
      }),
    }
  );

  const json =
    await response.json();

  return json.access_token;
}