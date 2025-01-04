import styled from "styled-components";

export const WorkStyled = styled.section`
  & > div > h1 {
    text-indent: -0.15em;
  }
`;

export const WorkItemContainer = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const WorkItemTitle = styled.div`
  p {
    font-size: var(--text-base);
    padding: 4px 0;

    @media (width <= 768px) {
      font-size: var(--text-sm);
    }
  }
`;
