import styled from "styled-components";

export const AboutStyled = styled.section``;

export const AboutManifesto = styled.div`
  max-width: 650px;
  margin: 0 auto;

  p {
    font-size: 20px;
    word-wrap: break-word;
    letter-spacing: 0em;
    overflow-wrap: break-word;
    margin-bottom: 15px;
  }

  @media (width <= 768px) {
    p {
      font-size: 16px;
    }
  }

  blockquote {
    padding: 20px 20px;
    margin: 40px 0;
    background-color: #e5e5e525;

    & > p {
      font-family: "EB Garamond", "sans-serif";
      font-weight: 300;
      font-style: italic;
      line-height: 1.2;
      margin-bottom: 0;
      letter-spacing: -0.025em;
      font-size: 25px;

      &:last-child {
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
