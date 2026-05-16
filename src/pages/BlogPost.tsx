import BlogPostMain from "../components/blog/BlogPostMain.tsx";
import type { BlogPostProps } from "../types/blogTypes.ts";

export default function BlogPost({ frontmatter, children }: BlogPostProps) {
  return <BlogPostMain frontmatter={frontmatter}>{children}</BlogPostMain>;
}
