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

  @media (width <= 768px) {
    padding: 0px;
  }
`;

export const NavbarLogo = styled.img`
  width: 120px;
  height: auto;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavbarMenu = styled.menu`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  a {
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700), 0.8);
    line-height: 1;
    text-decoration-line: none;
    padding-left: 12px;
    letter-spacing: -0.025em;

    &:hover {
      color: rgba(var(--desk-black));
    }
  }
`;
