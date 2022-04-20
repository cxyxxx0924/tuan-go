import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolve("src"),
      components: pathResolve("src/components"),
      pages: pathResolve("src/pages"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "src/assets/styles/var.scss";',
      },
    },
  },
});

function pathResolve(dir: string) {
  return resolve(__dirname, dir);
}
