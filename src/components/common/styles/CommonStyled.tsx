import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;

export const HomeTitle = styled.h1`
  font-family: "EB Garamond", serif;
  font-weight: 400;
  font-style: oblique;
  font-size: 80px;
  letter-spacing: -0.05em;
  padding: 0;
  margin: 0 auto 15px;

  @media (width <= 768px) {
    font-size: 50px;
  }
`;

export const Divider = styled.hr`
  border: 0.5px solid rgba(var(--desk-gray-500), 0.6);
`;

export const HomeItemTitle = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-sm);
  }
`;
