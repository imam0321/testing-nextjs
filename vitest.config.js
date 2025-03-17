import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugin: [react()],
  test: {
    environment: "jsdom",
  },
});
