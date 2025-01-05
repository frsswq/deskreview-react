import styled from "styled-components";
import Navbar from "../components/common/Navbar.tsx";

export default function NotFound() {
  return (
    <>
      <FixedContainer>
        <Navbar />
      </FixedContainer>
      <NotFoundStyled>
        <p>404</p>
        <p>Not Found</p>
      </NotFoundStyled>
    </>
  );
}

const FixedContainer = styled.div`
  nav {
    position: fixed;
  }
`;

const NotFoundStyled = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -0.025em;
    font-size: 4rem;
    line-height: 1;

    &:first-of-type {
      font-weight: 400;
      font-size: 5rem;
      margin-right: 30px;
    }
  }

  @media (width <= 768px) {
    flex-direction: column;
    p {
      font-size: 2rem;

      &:first-of-type {
        margin-right: 0;
        line-height: 1;
        font-size: 5rem;
      }
    }
  }
`;
