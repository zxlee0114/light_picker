"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

const AuthBtn = () => {
  const t = useTranslations("auth");
  const { data: session } = authClient.useSession(); // * client side way to get the session

  const handleSignOut = () => {
    try {
      authClient.signOut();
      toast.success("登出成功");
    } catch (error) {
      console.error(error);
      toast.error("登出失敗");
    }
  };

  return (
    <>
      {session ? (
        <button onClick={handleSignOut} className="btn btn-medium relative">
          {t("logout")}
        </button>
      ) : (
        <button className="btn btn-medium relative">
          <Link href={ROUTES.LOGIN} className="absolute inset-0" />
          {t("login")}
        </button>
      )}
    </>
  );
};

export default AuthBtn;
