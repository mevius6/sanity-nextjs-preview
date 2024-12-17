// https://prettier.io/docs/en/configuration
/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 160,
  tabWidth: 2,
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss
  plugins: ['prettier-plugin-tailwindcss'],
};
export default config;
