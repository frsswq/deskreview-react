import { ReactNode } from "react";

export interface Frontmatter {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  category?: string;
  author?: string;
}

export interface MarkdownFile {
  frontmatter: Frontmatter;
  content: string;
}

export interface BlogPostProps {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    tags?: string[];
    category?: string;
    author?: string;
  };
  children: ReactNode;
}
