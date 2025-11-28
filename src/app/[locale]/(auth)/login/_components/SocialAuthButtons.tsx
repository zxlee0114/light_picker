"use client";

import BetterAuthActionButton from "@/components/auth/BetterAuthActionButton";
import Icon from "@/components/Icon";
import {
  SUPPORTED_OAUTH_PROVIDER_DETAILS,
  SUPPORTED_OAUTH_PROVIDERS,
} from "@/constants/o-auth-providers";
import { ROUTES } from "@/constants/routes";
import { authClient } from "@/lib/auth-client";

const SocialAuthButtons = () => {
  return SUPPORTED_OAUTH_PROVIDERS.map(provider => {
    // TODO handle error and loading state
    return (
      <BetterAuthActionButton
        variant="outline"
        key={provider}
        action={() =>
          authClient.signIn.social({ provider, callbackURL: ROUTES.HOME })
        }
      >
        <Icon name={SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].icon} />
        {SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].name}
      </BetterAuthActionButton>
    );
  });
};

export default SocialAuthButtons;
