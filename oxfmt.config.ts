import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["**/*.astro", ".astro/**", "dist/**", "node_modules/**", "public/**"],
  printWidth: 100,
  proseWrap: "preserve",
  sortImports: true,
  sortPackageJson: true,
});
