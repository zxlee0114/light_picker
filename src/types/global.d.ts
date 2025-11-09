import type { ReactNode } from "react";

type ParamsKeys = "locale" | "id";

interface RouteParams {
  params: Promise<Record<ParamsKeys, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface RouteParamsWithChildren extends RouteParams {
  children: ReactNode;
}
