import styled from "styled-components";

export const AboutStyled = styled.section``;

export const AboutManifesto = styled.div`
  max-width: 650px;
  margin: 0 auto;

  p {
    font-size: 20px;
    word-wrap: break-word;
    letter-spacing: -0.025em;
    overflow-wrap: break-word;
    margin-bottom: 15px;

    & > span {
      font-family: "EB Garamond", serif;
      font-style: oblique;
      font-size: 22px;
    }

    &:first-of-type > span:first-of-type {
      font-size: 24px;
    }
  }

  @media (width <= 768px) {
    p {
      font-size: 16px;

      & > span {
        font-size: 18px;
      }

      &:first-of-type > span:first-of-type {
        font-size: 20px;
      }
    }
  }

  blockquote {
    padding: 20px 20px;
    margin-top: 40px;
    background-color: rgba(var(--desk-gray-300), 0.25);

    & > p {
      font-family: "EB Garamond", serif;
      font-weight: 300;
      font-style: italic;
      line-height: 1.2;
      margin-bottom: 0;
      letter-spacing: -0.025em;
      font-size: 25px;

      &:last-of-type {
        text-align: right;
      }
    }

    @media (width <= 768px) {
      p {
        font-size: 20px;
      }
    }
  }
`;
