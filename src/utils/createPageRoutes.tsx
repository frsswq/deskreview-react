import { Route } from "react-router";
import BlogPost from "../pages/BlogPost";

interface MDXModule {
  default: React.ComponentType;
}

export function createPageRoutes() {
  const mdxFiles = import.meta.glob<MDXModule>("../contents/*.mdx", {
    eager: true,
  });

  return Object.entries(mdxFiles).map(([path, module]) => {
    const fileName = path.match(/\/([^/]+)\.mdx$/)?.[1] || "";

    return (
      <Route
        key={fileName}
        path={fileName}
        element={
          <BlogPost>
            <module.default />
          </BlogPost>
        }
      />
    );
  });
}
