// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Astro rules (handles .astro file parsing automatically)
  ...eslintPluginAstro.configs.recommended,

  // Prettier last — disables conflicting formatting rules
  eslintConfigPrettier,

  {
    rules: {
      // Add any custom rule overrides here
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
