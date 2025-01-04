import styled from "styled-components";

interface WorkItemDetailProps {
  isOpen: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  max-height: ${({ isOpen }) => (isOpen ? "3000px" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
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
  }

  * {
    margin-bottom: 8px;
  }

  li {
    list-style-type: none;
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  img {
    object-fit: cover;
    max-width: 90%;
    max-height: 100%;
    margin: 16px auto 24px 0;
    border: 2px solid black;
    border-radius: 8px;
  }
`;
