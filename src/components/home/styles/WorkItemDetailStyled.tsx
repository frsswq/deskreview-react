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

  * {
    margin-bottom: 8px;
  }

  p:first-of-type,
  li:first-of-type {
    margin-top: 8px;
  }

  p:nth-of-type(7) {
    overflow-wrap: break-word;
    max-width: 26ch;
  }

  p:last-of-type {
    margin-top: 20px;
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
    max-width: 85%;
    max-height: 100%;
    margin: 16px auto 24px 0;
    border: 1px solid black;
    border-radius: 8px;
  }

  @media (width <= 768px) {
    img {
      margin: 8px auto 16px 0;
      max-width: 95%;
    }

    p:last-of-type {
      margin-top: 8px;
    }
  }
`;
