import styled from "styled-components";

export const BlogPostHeader = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 32px;
  gap: 24px 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 52px;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  @media (width <= 768px) {
    gap: 16px 0;
    margin-top: 8px;
    margin-bottom: 24px;

    h1 {
      font-size: 36px;
    }
  }
`;

export const BlogPostHeaderDetail = styled.div`
  display: flex;

  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    color: rgb(var(--desk-gray-700));
    font-family: "EB Garamond", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .author {
    text-transform: capitalize;
    font-weight: 500;
  }

  .date {
    font-weight: 400;
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-lg);
    }
  }
`;
