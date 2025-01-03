import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";
import { NavLink } from "react-router";
import navbarLogo from "../../assets/svg/logo_full_navbar.svg";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavLink to="/">
          <NavbarLogo src={navbarLogo} alt="Navbar_Logo" />
        </NavLink>
        <NavbarMenu>
          <NavLink to="/study">Study</NavLink>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
