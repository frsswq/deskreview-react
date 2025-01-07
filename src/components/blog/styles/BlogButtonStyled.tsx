import styled from "styled-components";

export const BlogButtonStyled = styled.button`
  display: flex;
  background-color: rgba(var(--desk-gray-300), 0.5);
  color: rgba(var(--text-black));
  text-decoration: none;
  aspect-ratio: 1;
  width: 100%;
  padding: 24px 24px;
  margin: 0 auto;
  border: 1px solid rgba(var(--desk-gray-300));
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
`;

export const BlogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 16px 0;
  }
`;
