import styled from "styled-components";

export const BlogButtonStyled = styled.button`
  display: flex;
  background-color: rgba(var(--desk-gray-300), 0.5);
  color: rgba(var(--text-black));
  text-decoration: none;
  aspect-ratio: 3 / 2;
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

export const BlogButtonImage = styled.img`
  margin: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid rgba(var(--desk-gray-300));
`;

export const BlogButtonDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 16px 0;

  p {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: var(--text-xl);

    &:last-of-type {
      text-align: right;
    }
  }
`;
