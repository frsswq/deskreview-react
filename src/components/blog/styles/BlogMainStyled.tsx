import styled from "styled-components";
import { Link } from "react-router";

export const BlogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;

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
