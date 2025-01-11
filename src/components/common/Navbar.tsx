import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";
import navbarNavigation from "../../hooks/navbarNavigation.ts";
import logoSvg from "/svg/logo_full_navbar.svg";
import { NavLink } from "react-router";

export default function Navbar() {
  const { handleClick } = navbarNavigation();

  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavLink to="/">
          <NavbarLogo src={logoSvg} alt="Navbar_Logo" width="120" height="30" />
        </NavLink>
        <NavbarMenu>
          <a href="#work" onClick={(e) => handleClick(e, "#work")}>
            Work
          </a>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Study</NavLink>
          <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
            Contact
          </a>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
