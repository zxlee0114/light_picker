import { type JSX, use } from "react";

import { setRequestLocale } from "next-intl/server";

import HomeBanner from "./_components/HomeBanner";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}): JSX.Element {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <HomeBanner />
    </main>
  );
}
