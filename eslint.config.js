import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tseslint.plugin,
      tailwindcss,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      indent: ["error", 2],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
];
