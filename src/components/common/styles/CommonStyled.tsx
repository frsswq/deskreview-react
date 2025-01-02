import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 20px auto;
`;

export const HomeTitle = styled.h1`
  font-family: "EB Garamond", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 80px;
  letter-spacing: -0.075em;
  max-width: 650px;
  padding: 0;
  margin: 15px auto;

  @media (width <= 768px) {
    font-size: 50px;
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid #e5e5e5;
`;
