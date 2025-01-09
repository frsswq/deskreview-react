import { Route } from "react-router";
import BlogPost from "../pages/BlogPost";
import ReactMarkdown from "react-markdown";

export function createPageRoutes() {
  const markdownFiles = import.meta.glob<{
    frontmatter: any;
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
            <ReactMarkdown children={content} />
          </BlogPost>
        }
      />
    );
  });
}
