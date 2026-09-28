import eslintPluginAstro, { processors } from "eslint-plugin-astro";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro", "*.ts", "*.tsx"],
    processors: "astro/client-side-ts",
    rules: {},
  },
];
