import { ReactNode } from "react";

export interface Frontmatter {
  title: string;
  date: string;
  tag: string;
  author: string;
  description?: string;
}

export interface MarkdownFile {
  frontmatter: Frontmatter;
  content: string;
}

export interface BlogPostProps {
  frontmatter: {
    title: string;
    date: string;
    tag: string;
    author: string;
    description?: string;
  };
  children: ReactNode;
}
