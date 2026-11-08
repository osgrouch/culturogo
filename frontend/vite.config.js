// This was written by Anthropic's Claude Code (model: Sonnet 5.5, claude-sonnet-5-5)
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Forward /api requests to the Python backend so the browser sees one origin (no CORS needed in dev)
    proxy: {
      "/api": {
        // TODO: change this to be an environment variable
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
