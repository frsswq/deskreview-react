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
  display: grid;
  grid-template-columns: 8fr 2fr;
  text-decoration: none;
  align-items: center;

  p {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);

    &:first-of-type {
      line-height: 1.6;
    }

    &:last-of-type {
      text-align: right;
    }
  }

  @media (width <= 768px) {
    padding: 0px 0;
    grid-template-columns: 1fr;

    p {
      font-size: var(--text-lg);

      &:last-of-type {
        display: none;
      }
    }
  }
`;
