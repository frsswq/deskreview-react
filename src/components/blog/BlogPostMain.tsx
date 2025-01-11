import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";
import styled from "styled-components";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author, description } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;

  return (
    <MainStyled>
      <SectionContainer>
        <BlogPostHeader>
          {title && <h1>{title}</h1>}
          {description && <p className="desc">{description}</p>}
          <BlogPostHeaderDetail>
            {tag && <p className="tag">{tag}</p>}
            {author && <p className="capitalize author">{author}</p>}
            {formattedDate && <p className="date">{formattedDate}</p>}
          </BlogPostHeaderDetail>
        </BlogPostHeader>
        <BlogPostContent className="prose">{children}</BlogPostContent>
      </SectionContainer>
    </MainStyled>
  );
}

const BlogPostHeader = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 1rem 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 3rem;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  p {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  @media (width <= 768px) {
    margin-top: 0.625rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: var(--text-base);
    }
  }
`;

const BlogPostHeaderDetail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    font-family: "EB Garamond", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .author {
    font-weight: 500;
  }

  .date {
  }
`;

const BlogPostContent = styled.article`
  margin-top: 2rem;

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    color: black;
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
