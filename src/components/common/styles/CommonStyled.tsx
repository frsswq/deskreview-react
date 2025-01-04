import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0px auto 40px;
`;

export const HomeTitle = styled.h1`
  font-family: "EB Garamond", serif;
  font-weight: 400;
  font-style: oblique;
  font-size: 80px;
  letter-spacing: -0.05em;
  max-width: var(--max-w);
  padding: 0;
  margin: 0 auto 15px;

  @media (width <= 768px) {
    font-size: 50px;
  }
`;

export const Divider = styled.hr`
  border: 0.5px solid rgba(var(--desk-gray-500), 0.6);
`;
