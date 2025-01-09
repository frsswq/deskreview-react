import styled from "styled-components";

export const BlogButtonStyled = styled.button`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;

  p {
    font-weight: 300;
    font-size: var(--text-sm);

    &:hover {
      font-weight: 400;
    }

    &:first-of-type {
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }
  }
`;

export const BlogButtonContainer = styled.div`
  /* margin-top: 28px; */
  display: flex;
  flex-direction: column;
`;
