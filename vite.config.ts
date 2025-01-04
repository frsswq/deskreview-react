import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
      }),
    ],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/deskreview-react/";
  }

  return config;
});
