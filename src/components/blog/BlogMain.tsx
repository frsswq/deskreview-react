import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogMainStyled";
import { Link } from "react-router";
import {
  fetchMarkdownFilesUtil,
  sortMarkdownFilesUtil,
  generateLinksUtil,
} from "../../utils/mdUtil";
import styled from "styled-components";

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
            <>
              <LinkStyled key={path} to={path}>
                <p>{title}</p>
                <p>{date && `${date}`}</p>
              </LinkStyled>
              <Divider />
            </>
          ))}
        </BlogButtonContainer>
      </SectionContainer>
    </MainStyled>
  );
}

const LinkStyled = styled(Link)`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
  }

  @media (width <= 768px) {
    padding: 8px 0;

    p {
      font-size: var(--text-base);
    }
  }
`;
