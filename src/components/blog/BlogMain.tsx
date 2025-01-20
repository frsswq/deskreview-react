import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer, LinkStyled } from "./styles/BlogMainStyled";
import {
  fetchMarkdownFilesUtil,
  sortMarkdownFilesUtil,
  generateLinksUtil,
} from "../../utils/mdUtil";
import { useEffect } from "react";

export default function BlogMain() {
  const markdownFiles = fetchMarkdownFilesUtil();
  const sortedEntries = sortMarkdownFilesUtil(markdownFiles);
  const links = generateLinksUtil(sortedEntries);

  useEffect(() => {
    document.title = "Study | Deskreview";
  });

  return (
    <MainStyled>
      <meta name="author" content="Deskreview" />
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        {links.length > 0 && (
          <BlogButtonContainer>
            <Divider />
            {links.map(({ title, path, date }) => (
              <>
                <LinkStyled key={path} to={path}>
                  {date && <p className="blog-date">{date}</p>}
                  <p className="blog-title">{title}</p>
                </LinkStyled>
                <Divider />
              </>
            ))}
          </BlogButtonContainer>
        )}
      </SectionContainer>
    </MainStyled>
  );
}
