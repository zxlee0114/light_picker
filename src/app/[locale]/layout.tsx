import type { JSX } from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import type { RouteParams, RouteParamsWithChildren } from "@/types/global";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const generateMetadata = async ({
  params,
}: RouteParams): Promise<Metadata> => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages({ locale });
  const t = messages.metadata;

  return {
    title: t.title,
    description: t.description,
  };
};

export function generateStaticParams(): {
  locale: "en" | "zh-TW";
}[] {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RouteParamsWithChildren): Promise<JSX.Element> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
