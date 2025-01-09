import styled from "styled-components";

interface WorkItemDetailProps {
  $isOpen: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  max-height: ${({ $isOpen }) => ($isOpen ? "3000px" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  @media (width <= 768px) {
    gap: 8px 0;
  }
`;

export const WorkItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  img {
    object-fit: contain;
    cursor: pointer;
    max-width: 85%;
    height: auto;
    max-height: 100%;
    margin-right: auto;
    border: 1.5px solid rgb(var(--desk-gray-700));
    border-radius: 8px;
  }

  ul {
    display: grid;
    gap: 4px 0;
  }

  li {
    list-style-type: none;
  }

  &:first-of-type {
    margin-top: 16px;
  }

  &:last-of-type {
    margin-bottom: 24px;
  }

  &:nth-of-type(5) {
    margin: 8px 0 32px;
  }

  .text,
  .title {
    font-size: var(--text-lg);
  }

  .title {
    font-weight: 400;
  }

  .text {
    overflow-wrap: break-word;
    max-width: 27ch;
  }

  @media (width <= 768px) {
    img {
      max-width: 95%;
    }

    ul {
      gap: 2px 0;
    }

    &:first-of-type {
      margin-top: 8px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      margin: 8px 0 24px;
    }

    .text,
    .title {
      font-size: var(--text-sm);
    }
  }
`;
