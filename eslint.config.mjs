import globals from "globals";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.browser },
    rules: {
      "import/extensions": ["error", "always", { ignorePackages: true }],
    },
  },
  {
    files: ["test/**/*.js"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  js.configs.recommended,
  importPlugin.flatConfigs.warnings,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];
