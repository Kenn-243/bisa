import * as AuthSession from "expo-auth-session";

const config = {
  clientId: "38bf1e93-d041-40b6-abfe-2254c781847a",
  redirectUri: AuthSession.makeRedirectUri({
    useProxy: true,
  }),
  scopes: ["openid", "profile", "email", "User.Read"],
  serviceConfiguration: {
    authorizationEndpoint:
      "https://login.microsoftonline.com/9029d1bf-84ff-4fb3-80de-e7dc18e9810b/oauth2/v2.0/authorize",
    tokenEndpoint:
      "https://login.microsoftonline.com/9029d1bf-84ff-4fb3-80de-e7dc18e9810b/oauth2/v2.0/token",
    revocationEndpoint:
      "https://login.microsoftonline.com/9029d1bf-84ff-4fb3-80de-e7dc18e9810b/oauth2/v2.0/logout",
  },
  additionalParameters: {
    prompt: "select_account",
  },
};

export default config;
