import styled from "styled-components";

export const WorkStyled = styled.section`
  & > div > h1 {
    text-indent: -0.15em;
  }
`;

export const WorkItemContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const WorkItemStyled = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 2.5fr 1fr;
  font-size: 20px;
  padding: 4px 0;
  align-items: center;

  p:first-child {
    font-size: 24px;
    font-weight: 400;
  }

  p:last-child {
    text-align: right;
  }

  @media (width <= 768px) {
    grid-template-columns: 8fr 2fr;

    p {
      font-size: 16px;
    }

    p:first-child {
      font-size: 20px;
    }

    p:nth-child(2) {
      display: none;
    }
  }
`;

export const WorkDetailStyled = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 2.5fr 1fr;
  font-size: 16px;
  letter-spacing: -0.025rem;
  padding: 4px 0;

  & > p:last-child {
    text-align: right;
  }

  @media (width <= 768px) {
    grid-template-columns: 8fr 2fr;

    & > p {
      font-size: 16px;
    }

    & > p:nth-child(2) {
      display: none;
    }
  }
`;
