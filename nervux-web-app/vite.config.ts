import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import tailwindcss from "@tailwindcss/vite";
import Layouts from "vite-plugin-vue-layouts";
import VueRouter from "unplugin-vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueRouter({
      dts: "./typed-router.d.ts", // para tener autocompletado si quieres
    }),

    Layouts({
      layoutsDirs: "src/layouts", // asegúrate de tener esta carpeta
      defaultLayout: "default",
    }),
  ],
});
