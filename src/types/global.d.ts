import type { ReactNode } from "react";

export type Locales = "zh-TW" | "en";

type ParamsKeys = "locale" | "id";

interface RouteParams {
  params: Promise<Record<ParamsKeys, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface RouteParamsWithChildren extends RouteParams {
  children: ReactNode;
}
