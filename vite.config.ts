import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import matter from "gray-matter";

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
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
  base: "/deskreview-react/",
});
