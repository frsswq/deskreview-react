import styled from "styled-components";

export const WorkStyled = styled.section``;

export const WorkItemContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const WorkItemStyled = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 2.5fr 1fr;
  font-size: 24px;
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

export const WorkDetailStyled = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 2.5fr 1fr;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.025rem;
  padding: 4px 0;

  & > p:last-child {
    text-align: right;
  }

  @media (width <= 768px) {
    grid-template-columns: 8fr 2fr;

    & > p {
      font-size: 12px;
    }

    & > p:nth-child(2) {
      display: none;
    }
  }
`;
