import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
export default defineConfig({
  plugins: [pluginVue()],
  // server: {
  //   base: "/js-bitwise-operations/",
  // },
  html: {
    title: "JS Bitwise Operations",
  },
});
