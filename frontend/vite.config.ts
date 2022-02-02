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
});
