import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import { formatDateUtil } from "../../utils/dateUtil.ts";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date } = frontmatter;
  const formattedDate = date ? formatDateUtil(date) : null;

  return (
    <MainStyled>
      <SectionContainer>
        {title && <h1>{title}</h1>}
        {formattedDate && <p>Published on: {formattedDate}</p>}
        {children}
      </SectionContainer>
    </MainStyled>
  );
}
