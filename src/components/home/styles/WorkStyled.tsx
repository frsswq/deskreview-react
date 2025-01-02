import styled from "styled-components";

const gridTemplate = "5fr 2fr 1fr 0.1fr";
const gridTemplateMobile = "8fr 2fr";

export const WorkStyled = styled.section`
  & > div > h1 {
    text-indent: -0.15em;
  }
`;

export const WorkItemContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const WorkItemStyled = styled.button`
  display: grid;
  grid-template-columns: ${gridTemplate};
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.05em;
  padding: 4px 0;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;

  p:first-of-type {
    font-size: 24px;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
  }

  p:last-of-type {
    width: fit-content;
    transform: rotate(90deg);
    margin-left: auto;
    margin-right: 8px;
  }

  @media (width <= 768px) {
    grid-template-columns: ${gridTemplateMobile};

    p {
      font-size: 16px;
    }

    p:first-of-type {
      font-size: 20px;
    }

    & > p:nth-of-type(2),
    & > p:nth-of-type(3) {
      display: none;
    }
  }
`;

export const WorkDetailStyled = styled.div`
  display: grid;
  grid-template-columns: ${gridTemplate};
  font-size: 16px;
  letter-spacing: -0.025rem;
  padding: 4px 0;

  & > p:last-of-type {
    text-align: right;
  }

  @media (width <= 768px) {
    grid-template-columns: ${gridTemplateMobile};

    & > p {
      font-size: 16px;
    }

    & > p:nth-of-type(2),
    & > p:nth-of-type(3) {
      display: none;
    }
  }
`;
