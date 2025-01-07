import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavLink to="/">
          <NavbarLogo
            src="svg/logo_full_navbar.svg"
            alt="Navbar_Logo"
            width="120"
            height="30"
          />
        </NavLink>
        <NavbarMenu>
          <NavLink to="/blog">Study</NavLink>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
