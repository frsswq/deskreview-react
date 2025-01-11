import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";
import { useEffect } from "react";
import styled from "styled-components";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author, description } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      if (
        (heading.textContent && heading.textContent.startsWith("W")) ||
        (heading.textContent && heading.textContent.startsWith("T"))
      ) {
        heading.classList.add("indent-fix");
      }
    });
  }, [children]);

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
  margin-top: 20px;
  gap: 24px 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 3.125rem;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  .desc {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  @media (width <= 768px) {
    margin-top: 10px;
    gap: 16px 0;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
    }

    .desc {
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
    margin-bottom: 8px;
  }

  .author {
    font-weight: 500;
  }

  .date {
  }

  @media (width <= 768px) {
    .tag {
      margin-bottom: 4px;
    }
  }
`;

const BlogPostContent = styled.article`
  margin-top: 2rem;
  min-width: 100%;

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
    font-family: "EB Garamond", serif;
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

  h1.indent-fix,
  h2.indent-fix {
    text-indent: -0.15em;
  }

  h3.indent-fix,
  h4.indent-fix,
  h5.indent-fix,
  h6.indent-fix {
    text-indent: -0.1em;
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
