export const SUPPORTED_OAUTH_PROVIDERS = ["google", "facebook"] as const;
export type SupportedOauthPrividers =
  (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const OAUTH_ICON_IDS = ["google-oauth", "facebook-oauth"] as const;
export type OAuthIconId = (typeof OAUTH_ICON_IDS)[number];

export const SUPPORTED_OAUTH_PROVIDER_DETAILS: Record<
  SupportedOauthPrividers,
  { name: string; icon: OAuthIconId }
> = {
  google: { name: "Google", icon: "google-oauth" },
  facebook: { name: "Facebook", icon: "facebook-oauth" },
};
