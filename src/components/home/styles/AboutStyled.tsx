import styled from "styled-components";

export const ManifestoText = styled.p`
  font-size: var(--text-xl);
  overflow-wrap: break-word;
  margin-bottom: 15px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-2xl);
  }

  @media (width <= 768px) {
    font-size: var(--text-base);

    span {
      font-size: var(--text-lg);
    }
  }
`;

export const ManifestoQuote = styled.blockquote`
  margin-top: 20px;

  p {
    font-family: "EB Garamond", serif;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    margin-bottom: 0;
    font-size: var(--text-2xl);

    &:last-of-type {
      font-style: oblique;
      text-align: right;
    }
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-xl);
    }
  }
`;
