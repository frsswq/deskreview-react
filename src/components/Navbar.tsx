import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
} from "./styles/NavbarStyled.tsx";
import navbarLogo from "../assets/svg/logo_full_navbar.svg";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarLogo src={navbarLogo} alt="" />
      </NavbarContainer>
    </NavbarStyled>
  );
}
