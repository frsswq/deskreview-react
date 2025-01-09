import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";
import { Link } from "react-router";
import React from "react";
import {
  fetchMarkdownFilesUtil,
  sortMarkdownFilesUtil,
  generateLinksUtil,
} from "../../utils/mdUtil";

export default function BlogMain() {
  const markdownFiles = fetchMarkdownFilesUtil();
  const sortedEntries = sortMarkdownFilesUtil(markdownFiles);
  const links = generateLinksUtil(sortedEntries);

  return (
    <MainStyled>
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <Divider />
          {links.map(({ title, path, date }) => (
            <React.Fragment key={path}>
              <Link to={path} style={{ margin: "0.5rem" }}>
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
