import styled from "styled-components";

interface WorkItemDetailProps {
  isOpen: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  max-height: ${({ isOpen }) => (isOpen ? "3000px" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;

  p,
  li,
  img {
    margin: 8px 0;
  }

  li {
    list-style-type: none;
  }

  img {
    object-fit: cover;
    cursor: pointer;
    max-width: 85%;
    max-height: 100%;
    margin-right: auto;
    border: 1.5px solid rgb(var(--desk-gray-700));
    border-radius: 8px;
  }

  @media (width <= 768px) {
    img {
      max-width: 95%;
    }
  }
`;

export const WorkItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  .title {
    font-weight: 400;
  }

  .text {
    overflow-wrap: break-word;
    max-width: 25ch;
  }

  &:last-of-type {
    margin-bottom: 16px;
  }
`;
