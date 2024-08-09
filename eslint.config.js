const { configs } = require("eslint");
const svelte = require("eslint-plugin-svelte");
const globals = require("globals");
const { sveltekit } = require("@sveltejs/kit/vite");

module.exports = [
  configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignore: ["build/", ".svelte-kit/", "dist/"],
  },
  {
    plugins: [sveltekit()],
  },
  {
    resolve: {
      alias: {
        $lib: "src/lib",
      },
    },
  },
];
