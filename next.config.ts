import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

const nextWithIntl = createNextIntlPlugin();

export default nextWithIntl(nextConfig);
