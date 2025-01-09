import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";
import BlogPostMain from "../components/blog/BlogPostMain.tsx";
import { BlogPostProps } from "../types/blogTypes.ts";

export default function BlogPost({ frontmatter, children }: BlogPostProps) {
  return (
    <>
      <Navbar />
      <BlogPostMain frontmatter={frontmatter} children={children} />
      <Footer />
    </>
  );
}
