module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/base",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    // parser: "typescript-eslint-parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-undef": "off",
    "no-useless-escape": "off",
    "vue/no-undef-components": "off",
  },
};
