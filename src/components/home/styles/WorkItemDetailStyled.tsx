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

  li {
    list-style-type: none;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
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

    li:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;

export const WorkItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 16px 0;

  .title {
    font-weight: 400;
  }

  .text {
    overflow-wrap: break-word;
    max-width: 25ch;
  }

  &:last-of-type {
    margin-bottom: 24px;
  }

  &:nth-of-type(5) {
    margin: 24px 0 32px;
  }

  @media (width <= 768px) {
    margin: 12px 0;

    &:nth-of-type(5) {
      margin: 20px 0 24px;
    }

    &:last-of-type {
      margin-bottom: 24px;
    }
  }
`;
