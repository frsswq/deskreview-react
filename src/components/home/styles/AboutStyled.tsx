import styled from "styled-components";

export const ManifestoText = styled.p`
  font-size: var(--text-xl);
  overflow-wrap: break-word;
  margin-bottom: 16px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-xl);
    line-height: 1;
  }

  @media (width <= 768px) {
    font-size: var(--text-lg);

    span {
      font-size: var(--text-lg);
    }
  }
`;

export const ManifestoQuote = styled.blockquote`
  margin-top: 20px;

  p {
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    margin-bottom: 0;
    font-size: var(--text-3xl);

    &:last-of-type {
      font-style: italic;
      text-align: right;
    }
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-xl);
    }
  }
`;
