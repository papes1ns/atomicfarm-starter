import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "./src/**/*.{js,ts,jsx,tsx}",
    }),
  ],
  server: {
    port: 4000,
    host: "0.0.0.0",
  },
  define: {
    API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
    VERSION: JSON.stringify(process.env.VERSION),
  },
});
