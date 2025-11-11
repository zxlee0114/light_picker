import { type JSX, use } from "react";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import Navbar from "@/components/navigation/navbar";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}): JSX.Element {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <main>
      <Navbar />
      <div className="bg-primary-200">
        <h1>{t("header")}</h1>
      </div>
    </main>
  );
}
