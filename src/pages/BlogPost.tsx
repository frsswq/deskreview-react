import MainLayout from "../layouts/MainLayout.tsx";
import BlogPostMain from "../components/blog/BlogPostMain.tsx";
import { BlogPostProps } from "../types/blogTypes.ts";

export default function BlogPost({ frontmatter, children }: BlogPostProps) {
  return (
    <MainLayout>
      <BlogPostMain frontmatter={frontmatter} children={children} />
    </MainLayout>
  );
}
