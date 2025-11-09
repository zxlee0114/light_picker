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

  return (
    <div className="flex-center flex-col bg-danger">
      <button className="form-link">{t("header")}</button>
      <input type="checkbox" name="" id="" />
      <ol>
        <li>fff</li>
        <li>ffff</li>
        <li>f</li>
      </ol>
    </div>
  );
}
