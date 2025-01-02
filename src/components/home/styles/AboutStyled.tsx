import styled from "styled-components";

export const AboutStyled = styled.section``;

export const AboutManifesto = styled.div`
  width: fit-content;
  margin: 0 auto;

  h1 {
    font-family: "Fraunces", "sans-serif";
    font-weight: 300;
    font-style: italic;
    font-size: 50px;
    letter-spacing: -0.05em;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0em;
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 60ch;
    margin-bottom: 10px;
  }

  blockquote {
    font-size: 20px;
    letter-spacing: -0.025em;
    max-width: 60ch;
  }
`;
