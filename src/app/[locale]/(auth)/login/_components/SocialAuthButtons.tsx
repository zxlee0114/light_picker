"use client";

import { toast } from "sonner";

import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
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
      <Button
        variant="outline"
        key={provider}
        onClick={() => {
          authClient.signIn.social({ provider, callbackURL: ROUTES.HOME });
          toast.success("登入成功");
        }}
      >
        <Icon name={SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].icon} />
      </Button>
    );
  });
};

export default SocialAuthButtons;
