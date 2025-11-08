import { type JSX, use } from "react";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}): JSX.Element {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("home");

  return <h1>{t("header")}</h1>;
}
