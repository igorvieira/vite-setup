import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    resolve: {
      alias: {
        components: `${__dirname}/src/components/`,
        styles: `${__dirname}/src/styles/`,
        types: `${__dirname}/src/types/`,
        utils: `${__dirname}/src/utils/`,
      },
    },
    define: {
      "process.env": process.env,
      global: "window",
    },
    build: {
      commonjsOptions: { include: [] },
    },
    optimizeDeps: {
      disabled: false,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
      include: ["src/**/*.test.{ts,tsx}"],
      exclude: ["**/node_modules/**", "**/dist/**", "e2e/**"],
    },
  };
});
