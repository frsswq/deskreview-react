import { dependencies } from "./package.json";
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import matter from "gray-matter";

function renderChunks(deps: Record<string, string>) {
  const chunks: Record<string, string[]> = {};
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
    tailwindcss(),
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
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },

      output: {
        manualChunks(id) {
          const manualChunks = {
            vendor: ["react", "react-dom", "react-router"],
            ...renderChunks(dependencies),
          };

          for (const [chunkName, packages] of Object.entries(manualChunks)) {
            if (
              packages.some((packageName) =>
                id.includes(`/node_modules/${packageName}/`),
              )
            ) {
              return chunkName;
            }
          }
        },
      },
    },
  },
});
