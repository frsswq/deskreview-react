import styled from "styled-components";

export const NavbarStyled = styled.nav`
  background-color: rgb(var(--desk-white));
  padding: 16px 16px;
  border-bottom: 1px solid rgb(var(--desk-gray-300));
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1000;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (width <= 768px) {
    padding: 0px;
  }
`;

export const NavbarLogo = styled.img`
  width: 120px;
  height: auto;
  display: block;
`;

export const NavbarMenu = styled.menu`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  a {
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    color: rgb(var(--desk-gray-700));
    line-height: 1;
    text-decoration-line: none;
    padding-left: 12px;
    letter-spacing: -0.025em;

    &:hover {
      color: rgb(var(--desk-black));
      font-weight: 500;
    }
  }
`;
