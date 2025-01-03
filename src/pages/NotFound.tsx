import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar.tsx";

export default function NotFound() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <NotFoundStyled navbarHeight={navbarHeight}>
        <p>404</p>
        <p>Not Found</p>
      </NotFoundStyled>
    </>
  );
}

const NotFoundStyled = styled.main<{ navbarHeight: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${(props) => `calc(100vh - ${props.navbarHeight}px)`};

  p {
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
    letter-spacing: 0em;
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
        line-height: 1.2;
        font-size: 5rem;
      }
    }
  }
`;
