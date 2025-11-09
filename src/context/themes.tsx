"use client";

import type { JSX } from "react";

import {
  type ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from "next-themes";

const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps): JSX.Element => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
