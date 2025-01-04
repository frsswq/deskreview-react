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
        <NavLink to="/deskreview-react/">
          <NavbarLogo src="svg/logo_full_navbar.svg" alt="Navbar_Logo" />
        </NavLink>
        <NavbarMenu>
          <NavLink to="/deskreview-react/study">Study</NavLink>
          <a href="mailto:zaidandzaki@gmail.com">Contact</a>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
