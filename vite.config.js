import {defineConfig} from "vite"
import inject from "@rollup/plugin-inject"

export default defineConfig({
  // Base path for references to asset files in the built code.
  // Setting this to empty causes assets to be imported from a
  // relative path, which is necessary if your app is deployed
  // to a subdirectory (e.g. https://benchristel.github.io/my-app/)
  base: "",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [
    inject({
      include: "src/**/*.{ts,tsx,js,jsx}",
      test: ["@benchristel/taste", "test"],
      expect: ["@benchristel/taste", "expect"],
      is: ["@benchristel/taste", "is"],
      equals: ["@benchristel/taste", "equals"],
      not: ["@benchristel/taste", "not"],
      which: ["@benchristel/taste", "which"],
      debug: ["@benchristel/taste", "debug"],
    }),
  ],
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat", // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
})
