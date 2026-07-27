import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "error",
    perf: "error",
    style: "error",
    suspicious: "error",
  },
  ignorePatterns: [".astro/**", "dist/**", "node_modules/**"],
  options: {
    denyWarnings: true,
    reportUnusedDisableDirectives: "error",
    typeAware: true,
    typeCheck: true,
  },
  overrides: [
    {
      files: [
        "src/content.config.ts",
        "src/pages/rss.xml.ts",
        "src/pages/*slug*.astro",
        "src/pages/tags/*tag*.astro",
      ],
      rules: {
        // Astro discovers these framework hooks by their required named exports.
        "import/prefer-default-export": "off",
      },
    },
    {
      files: ["src/pages/*slug*.astro", "src/pages/tags/*tag*.astro"],
      rules: {
        // Astro's static route analysis requires a direct getStaticPaths export.
        "import/exports-last": "off",
      },
    },
    {
      files: ["src/layouts/BaseLayout.astro"],
      rules: {
        // Global CSS is intentionally loaded once as a side effect by the root layout.
        "import/no-unassigned-import": "off",
      },
    },
    {
      files: ["scripts/**/*.mjs"],
      rules: {
        // Build tooling runs on Node.js rather than in the browser application.
        "import/no-nodejs-modules": "off",
      },
    },
  ],
  plugins: ["import", "jsdoc"],
  rules: {
    "eslint/no-duplicate-imports": [
      "error",
      {
        allowSeparateTypeImports: true,
      },
    ],
    // Oxfmt is the single owner of import ordering.
    "eslint/sort-imports": "off",
    // Named exports are intentional for reusable utilities and Astro's framework hooks.
    "import/no-named-export": "off",
  },
});
