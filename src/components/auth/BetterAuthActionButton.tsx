"use client";

import type { ComponentProps } from "react";

import { ActionButton } from "../ui/action-button";

type Props = Omit<ComponentProps<typeof ActionButton>, "action"> & {
  action: () => Promise<{ error: null | { message?: string } }>;
  successMessage?: string;
};

const BetterAuthActionButton = ({
  action,
  successMessage,
  ...props
}: Props) => {
  return (
    <ActionButton
      {...props}
      action={async () => {
        const res = await action();

        if (res.error) {
          return {
            error: true,
            message: res.error.message || "發生錯誤，請稍後再試",
          };
        } else {
          return { error: false, message: successMessage };
        }
      }}
    />
  );
};

export default BetterAuthActionButton;
