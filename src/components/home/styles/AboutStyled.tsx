import styled from "styled-components";

export const AboutStyled = styled.section``;

export const AboutManifesto = styled.div`
  width: fit-content;
  margin: 0 auto;

  h1 {
    font-family: "EB Garamond", "sans-serif";
    font-weight: 400;
    font-style: italic;
    font-size: 80px;
    letter-spacing: -0.075em;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.025em;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 60ch;
    margin-bottom: 15px;
  }

  blockquote {
    font-size: 20px;
    letter-spacing: -0.025em;
    max-width: 60ch;
  }
`;
