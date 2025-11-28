import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",

  // Next.js Type safety features
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },
};

const nextWithIntl = createNextIntlPlugin();

export default nextWithIntl(nextConfig);
