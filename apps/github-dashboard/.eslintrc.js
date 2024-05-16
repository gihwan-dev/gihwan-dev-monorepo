/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: "**/components/ui/*.tsx",
  parserOptions: {
    project: true,
  },
};
