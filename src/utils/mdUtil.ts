import { compareDesc } from "date-fns";
import { parseDateUtil, formatDateUtil } from "./dateUtil";
import { MarkdownFile } from "../types/blogTypes";

export const extractFileNameUtil = (path: string): string => {
  return path.match(/\/([^/]+)\.md$/)?.[1] || "";
};

export const fetchMarkdownFilesUtil = () => {
  return import.meta.glob<MarkdownFile>("../contents/*.md", {
    eager: true,
  });
};

export const sortMarkdownFilesUtil = (files: Record<string, MarkdownFile>) => {
  return Object.entries(files).sort(([, a], [, b]) => {
    const dateA = a.frontmatter.date
      ? parseDateUtil(a.frontmatter.date)
      : new Date(0);
    const dateB = b.frontmatter.date
      ? parseDateUtil(b.frontmatter.date)
      : new Date(0);
    return compareDesc(dateA, dateB);
  });
};

export const generateLinksUtil = (sortedEntries: [string, MarkdownFile][]) => {
  return sortedEntries.map(([path, module]) => {
    const fileName = extractFileNameUtil(path);
    const { frontmatter } = module;
    const title = frontmatter.title || "Untitled";
    const formattedDate = frontmatter.date
      ? formatDateUtil(frontmatter.date)
      : null;

    return { title, path: `/study/${fileName}`, date: formattedDate };
  });
};
