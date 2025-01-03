import styled from "styled-components";

const gridTemplate = "8fr 2fr";
const gridTemplateMobile = "8fr 2fr";

export const WorkStyled = styled.section`
  & > div > h1 {
    text-indent: -0.15em;
  }
`;

export const WorkItemContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

export const WorkItemStyled = styled.button`
  display: grid;
  grid-template-columns: ${gridTemplate};
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-xl);
  font-weight: 300;
  letter-spacing: -0.05em;
  padding: 4px 0;
  padding-right: 9px;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;

  p:first-of-type {
    font-size: var(--text-3xl);
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
  }

  svg {
    margin-left: auto;
  }

  @media (width <= 768px) {
    grid-template-columns: ${gridTemplateMobile};

    p:first-of-type {
      font-size: var(--text-xl);
    }
  }
`;

export const WorkDetailStyled = styled.div`
  font-size: var(--text-base);
  letter-spacing: -0.025rem;
  padding: 4px 0;

  @media (width <= 768px) {
    & > p {
      font-size: var(--text-base);
    }
  }
`;
