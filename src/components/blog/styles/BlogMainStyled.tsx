import styled from "styled-components";
import { Link } from "react-router";

export const BlogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px 0;

  @media (width <= 768px) {
    margin-top: 16px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;

  p {
    width: fit-content;
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    text-align: left;
    line-height: 1.6;
  }

  .blog-date {
    color: rgba(var(--desk-gray-700));
    font-size: var(--text-base);
    white-space: nowrap;
    margin-right: 12px;
  }

  .blog-title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    .blog-title {
      font-weight: 500;
      font-style: italic;
    }
  }

  @media (width <= 768px) {
    padding: 0px 0;

    .blog-date {
      font-size: var(--text-base);
      margin-right: 8px;
    }
  }
`;
