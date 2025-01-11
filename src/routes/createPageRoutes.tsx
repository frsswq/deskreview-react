import { Route } from "react-router";
import { lazy } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { routeData } from "../utils/routeData";

const BlogPost = lazy(() => import("../pages/BlogPost"));

export function createPageRoutes() {
  const routes = routeData();

  return routes.map(({ path, frontmatter, content }) => (
    <Route
      key={path}
      path={path}
      element={
        <BlogPost frontmatter={frontmatter}>
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </BlogPost>
      }
    />
  ));
}
