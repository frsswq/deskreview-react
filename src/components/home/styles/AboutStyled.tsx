import styled from "styled-components";

export const ManifestoText = styled.p`
  max-width: 530px;
  overflow-wrap: break-word;
  margin-bottom: 15px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-2xl);
  }

  &:first-of-type > span:first-of-type {
    font-size: var(--text-3xl);
  }

  @media (width <= 768px) {
    max-width: 100%;

    span {
      font-size: var(--text-lg);
    }

    &:first-of-type > span:first-of-type {
      font-size: var(--text-xl);
    }
  }
`;

export const ManifestoQuote = styled.blockquote`
  margin-top: 20px;

  p {
    font-family: "EB Garamond", serif;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    margin-bottom: 0;
    font-size: var(--text-3xl);

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
