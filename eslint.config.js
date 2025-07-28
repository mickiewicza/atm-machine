import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/naming-convention": [
        "warn",
        { format: ["camelCase"], selector: "default" },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "parameter",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/accessible-emoji": "off",
      "react-hooks/rules-of-hooks": "error",
      "no-console": "warn",
      "default-case": "off",
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          printWidth: 140,
          arrowParens: "avoid",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]);
