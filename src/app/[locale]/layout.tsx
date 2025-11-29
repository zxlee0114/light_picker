import type { JSX } from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/context/themes";
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
    title: {
      template: `%s | ${t.title} ✨`,
      default: `${t.title} ✨`,
    },
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

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="prefetch"
          href="/icons/sprites.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-center" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
