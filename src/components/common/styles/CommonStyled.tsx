import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0px auto 40px;
`;

export const HomeTitle = styled.h1`
  font-family: "EB Garamond", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 80px;
  letter-spacing: -0.05em;
  max-width: 650px;
  padding: 0;
  margin: 0 auto 15px;

  @media (width <= 768px) {
    font-size: 50px;
  }
`;

export const Divider = styled.hr`
  border: 1px solid #e5e5e5;
`;
