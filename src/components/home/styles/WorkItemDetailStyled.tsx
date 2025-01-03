import styled from "styled-components";

interface WorkItemDetailProps {
  isOpen: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 2fr;
  font-weight: 300;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;

  p:first-of-type,
  li:first-of-type {
    margin-top: 8px;
  }

  p:last-of-type {
    overflow-wrap: break-word;
    max-width: 26ch;
    margin-bottom: 16px;
  }

  & > * {
    margin-bottom: 8px;
  }

  & > ul > li {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  li {
    list-style-type: none;
  }

  @media (width <= 768px) {
    p:last-of-type {
      max-width: 26ch;
    }
  }
`;
