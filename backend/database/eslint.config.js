// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Possible Errors
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Best Practices
      eqeqeq: ["error", "always"],
      curly: "error",

      // Integrate Prettier - let Prettier handle formatting
      "prettier/prettier": "error",
    },
  },
];
