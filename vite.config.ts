import { dependencies } from "./package.json";
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import matter from "gray-matter";

function renderChunks(deps: Record<string, string>) {
  let chunks: Record<string, string[]> = {};
  Object.keys(deps).forEach((key) => {
    if (
      [
        "react",
        "react-router",
        "react-dom",
        "path",
        "fs",
        "fs-extra",
        "sharp",
        "@fontsource/eb-garamond",
        "@fontsource/dm-sans",
      ].includes(key)
    )
      return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          const { data: frontmatter, content } = matter(code);
          return `export const frontmatter = ${JSON.stringify(frontmatter)};
                  export const content = ${JSON.stringify(content)};`;
        }
      },
    },
  ],

  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },

      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
