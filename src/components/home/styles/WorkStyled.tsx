import styled from "styled-components";

export const WorkStyled = styled.section`
  & > div > h1 {
    text-indent: -0.15em;
  }
`;

export const WorkItemContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

interface WorkItemProps {
  isOpen: boolean;
}

export const WorkItemStyled = styled.button<WorkItemProps>`
  display: grid;
  cursor: pointer;
  grid-template-columns: 8fr 2fr;
  padding: 4px 0;
  padding-right: 8px;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;

  p {
    font-size: var(--text-3xl);
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
    letter-spacing: -0.025em;
  }

  svg {
    margin-left: auto;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    transition-duration: 300ms;
  }

  @media (width <= 768px) {
    grid-template-columns: 8fr 2fr;

    p {
      font-size: var(--text-xl);
    }
  }
`;

export const WorkDetailStyled = styled.div`
  font-size: var(--text-base);
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-sm);
  }
`;
