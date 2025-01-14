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
