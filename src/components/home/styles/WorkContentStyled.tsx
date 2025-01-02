import styled from "styled-components";

export const WorkContentContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Portofolio = styled.div``;

export const Divider = styled.hr`
  border-top: 1px solid #e5e5e5;
`;

export const WorkItemStyled = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 2.5fr 1fr;
  font-size: 20px;
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
