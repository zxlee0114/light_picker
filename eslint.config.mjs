import { createRequire } from "module";

import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

// Use createRequire + dynamic string to avoid static-analysis false-positives
const __require = createRequire(import.meta.url);
const nextVitals = __require(
  ["eslint-config-next", "/core-web-vitals"].join(""),
);
const nextTs = __require(["eslint-config-next", "/typescript"].join(""));

export default defineConfig([
  // ⚙️ 優先套用 Next.js 的設定
  ...nextVitals,
  ...nextTs,

  // ⚙️ 接著套用 Prettier 設定，避免格式化規則衝突
  prettierConfig,

  {
    plugins: {
      tailwindcss: tailwindcssPlugin,
      prettier: prettierPlugin,
    },

    settings: {
      // React 版本自動檢測
      react: {
        version: "detect",
      },

      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true,
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      tailwindcss: {
        config: "./tailwind.config.js",
      },
      // 忽略某些 package 的靜態解析檢查（避免 import/no-unresolved 的 false-positive）
      "import/ignore": ["^eslint-config-next($|/)"],
    },

    rules: {
      // --- TypeScript 規則 ---
      "@typescript-eslint/no-explicit-any": "warn",
      // "@typescript-eslint/explicit-function-return-type": [
      //   "warn",
      //   {
      //     allowExpressions: true,
      //     allowTypedFunctionExpressions: true,
      //     allowHigherOrderFunctions: true,
      //   },
      // ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],

      // --- React & Hooks 規則 ---
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-no-constructed-context-values": "warn",
      "react/no-array-index-key": "warn",
      "react/jsx-boolean-value": ["warn", "never"],
      "react/self-closing-comp": ["warn", { component: true, html: true }],

      // --- 效能與錯誤防範 ---
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-process-env": "warn",

      // --- Import 規則 ---
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/no-duplicates": "warn",
      "import/first": "error",
      "import/no-mutable-exports": "warn",
      "import/no-cycle": ["warn", { maxDepth: 1 }],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Node.js 內建模組 (fs, path)
            "external", // npm 套件
            "internal", // 專案 alias
            ["parent", "sibling", "index"],
            "object",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],

      // --- TailwindCSS plugin: class 排序與檢查 ---
      // Temporarily disable tailwindcss rules to avoid tailwind-api-utils resolution
      // errors inside the plugin worker (pnpm/synckit resolution issue).
      // Re-enable when eslint-plugin-tailwindcss compatibility is confirmed.
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",

      // --- Prettier plugin: 自動格式化 ---
      "prettier/prettier": ["warn"],
    },
  },

  // （已改為在 settings 中使用 import/ignore 來避免 false-positive）

  // 忽略編譯與輸出資料夾
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "dist/**",
    ],
  },
]);
