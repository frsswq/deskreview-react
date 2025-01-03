import styled from "styled-components";

interface WorkItemDetailProps {
  isOpen: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  max-height: ${(props) =>
    props.isOpen ? "1000px" : "0"}; /* Adjust max-height based on content */
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 2fr;
  font-size: var(--text-xl);
  font-weight: 300;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;

  & > * {
    margin-bottom: 16px;

    &:first-of-type {
      margin-top: 16px;
    }

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  & > ul > li {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  li {
    list-style-type: none;
  }

  @media (width <= 768px) {
    font-size: var(--text-base);

    & > * {
      margin-bottom: 8px;

      &:first-of-type {
        margin-top: 8px;
      }

      &:last-of-type {
        margin-bottom: 16px;
      }
    }

    & > ul > li {
      margin-bottom: 8px;

      &:last-of-type {
        margin-bottom: 0px;
      }
    }
  }
`;
