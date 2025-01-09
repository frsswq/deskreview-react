import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";
import { Link } from "react-router";
import React from "react";
import { compareDesc, parseISO } from "date-fns";

interface Frontmatter {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  category?: string;
  author?: string;
}

export default function BlogMain() {
  const markdownFiles = import.meta.glob<{
    frontmatter: Frontmatter;
    content: string;
  }>("../../contents/*.md", {
    eager: true,
  });

  const sortedEntries = Object.entries(markdownFiles).sort(([, a], [, b]) => {
    const dateA = a.frontmatter.date
      ? parseISO(a.frontmatter.date)
      : new Date(0);
    const dateB = b.frontmatter.date
      ? parseISO(b.frontmatter.date)
      : new Date(0);
    return compareDesc(dateA, dateB);
  });

  const links = sortedEntries.map(([path, module]) => {
    const fileName = path.match(/\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter } = module;
    const title = frontmatter.title || "Untitled";

    const formattedDate = frontmatter.date
      ? new Date(frontmatter.date).toLocaleDateString("en-GB")
      : null;

    return { title, path: `/blog/${fileName}`, date: formattedDate };
  });

  return (
    <MainStyled>
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <Divider />
          {links.map(({ title, path, date }) => (
            <React.Fragment key={path}>
              <Link key={path} to={path} style={{ margin: "0.5rem" }}>
                {title} {date && `(${date})`}
              </Link>
              <Divider />
            </React.Fragment>
          ))}
        </BlogButtonContainer>
      </SectionContainer>
    </MainStyled>
  );
}
