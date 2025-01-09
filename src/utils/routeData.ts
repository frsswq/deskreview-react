import { Frontmatter } from "../types/blogTypes";

export function routeData() {
  const markdownFiles = import.meta.glob<{
    frontmatter: Frontmatter;
    content: string;
  }>("../contents/*.md", {
    eager: true,
  });

  return Object.entries(markdownFiles).map(([path, module]) => {
    const fileName = path.match(/\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter, content } = module;

    return {
      path: fileName,
      frontmatter,
      content,
    };
  });
}
