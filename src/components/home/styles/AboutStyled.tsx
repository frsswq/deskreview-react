import styled from "styled-components";

export const AboutStyled = styled.section``;

export const AboutManifesto = styled.div`
  max-width: 650px;
  margin: 0 auto;

  p {
    font-size: var(--text-xl);
    word-wrap: break-word;
    letter-spacing: -0.025em;
    overflow-wrap: break-word;
    margin-bottom: 15px;

    & > span {
      font-family: "EB Garamond", serif;
      font-style: oblique;
      font-size: var(--text-2xl);
    }

    &:first-of-type > span:first-of-type {
      font-size: var(--text-3xl);
    }
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-base);

      & > span {
        font-size: var(--text-lg);
      }

      &:first-of-type > span:first-of-type {
        font-size: var(--text-xl);
      }
    }
  }

  blockquote {
    margin-top: 20px;

    p {
      font-family: "EB Garamond", serif;
      font-weight: 300;
      line-height: 1.2;
      text-align: left;
      margin-bottom: 0;
      letter-spacing: -0.025em;
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
  }
`;
