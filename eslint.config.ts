import eslintPluginJs from "@eslint/js";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintTypescript from "typescript-eslint";
import globals from "globals";

export default eslintTypescript.config(
  // { ignores: ["**/vite-env.d.ts"] },
  {
    languageOptions: {
      globals: { ...globals.browser },
      parser: eslintTypescript.parser,
    },
  },
  eslintPluginJs.configs.recommended,
  eslintTypescript.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value='react'] :matches(ImportDefaultSpecifier, ImportNamespaceSpecifier)",
          message: "Default React import is not allowed",
        },
        {
          selector: 'Identifier[name="React"]',
          message: "Prefix React is not allowed",
        },
      ],
      "newline-before-return": "error",
      "arrow-body-style": ["warn", "as-needed"], //  якщо стрілкова функція повертає одне значення, то {} і return не потрібні
    },
  },
  {
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }], // змушує писати string[] замість Array<string>.
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "typeLike", format: ["PascalCase"] },
      ],
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            FC: "Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177",
          },
        },
      ],
    },
  },
  {
    files: ["**/ambient/*.d.ts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/jsx-no-useless-fragment": "error", // забороняє зайві <>...</> (фрагменти).
      "react/boolean-prop-naming": [
        "error",
        { rule: "^is[A-Z]([A-Za-z0-9]?)+", validateNested: true },
      ], // якщо пропс boolean, його імя має починатися з is
      "react/destructuring-assignment": [
        "warn",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": ["warn", { component: true, html: true }], // самозакривні теги там, де немає дітей
    },
  },
  {
    plugins: { "react-hooks": eslintPluginReactHooks },
    rules: { ...eslintPluginReactHooks.configs.recommended.rules },
  }
);
