import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const config = {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
      }),
    ],
    base: "/deskreview-react/",
  };

  return config;
});
