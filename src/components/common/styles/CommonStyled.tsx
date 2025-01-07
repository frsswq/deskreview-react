import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 32px 16px;
`;

export const Container = styled.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;

export const SectionContainer = styled.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`;

export const DefaultTitle = styled.h1`
  font-family: "EB Garamond", serif;
  font-weight: 500;
  font-style: oblique;
  font-size: 70px;
  letter-spacing: -0.06em;
  margin-bottom: 16px;

  @media (width <= 768px) {
    font-size: 50px;
    margin-bottom: 8px;
  }
`;

export const Divider = styled.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`;

export const HomeItemTitle = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-xs);
  }
`;

export const HomeItemText = styled.p`
  font-size: var(--text-2xl);
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.025em;
  padding: 8px 0;

  @media (width <= 768px) {
    padding: 4px 0;
    font-size: var(--text-base);
  }
`;
