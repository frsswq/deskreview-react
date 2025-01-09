import { Route } from "react-router";
import { lazy } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Frontmatter } from "../types/blogTypes";

const BlogPost = lazy(() => import("../pages/BlogPost"));

export function createPageRoutes() {
  const markdownFiles = import.meta.glob<{
    frontmatter: Frontmatter;
    content: string;
  }>("../contents/*.md", {
    eager: true,
  });

  return Object.entries(markdownFiles).map(([path, module]) => {
    const fileName = path.match(/\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter, content } = module;

    return (
      <Route
        key={fileName}
        path={fileName}
        element={
          <BlogPost frontmatter={frontmatter}>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          </BlogPost>
        }
      />
    );
  });
}
