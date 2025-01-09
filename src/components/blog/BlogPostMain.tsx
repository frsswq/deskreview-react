import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import { formatDateUtil } from "../../utils/dateUtil.ts";
import styled from "styled-components";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date } = frontmatter;
  const formattedDate = date ? formatDateUtil(date) : null;

  return (
    <MainStyled>
      <SectionContainer>
        <BlogPostContent className="prose">
          {title && <h1>{title}</h1>}
          {formattedDate && <p>Published on: {formattedDate}</p>}
          {children}
        </BlogPostContent>
      </SectionContainer>
    </MainStyled>
  );
}

const BlogPostContent = styled.article`
  margin-top: 16px;

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "EB Garamond", "DM Sans", sans-serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media (width <= 768px) {
    p,
    li {
      font-size: var(--text-base);
    }

    h1 {
      font-size: 30px;
    }
  }
`;
