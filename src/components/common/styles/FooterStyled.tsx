import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px auto;

  p {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700));
    text-align: center;
    line-height: 1;
  }

  @media (width <= 768px) {
    margin: 32px auto;

    p {
      font-size: var(--text-sm);
    }
  }
`;
