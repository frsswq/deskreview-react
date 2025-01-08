import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";
import navbarNavigation from "../../hooks/navbarNavigation.ts";

export default function Navbar() {
  const { handleClick } = navbarNavigation();

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "/", label: "Home" },
    { href: "/blog", label: "Study" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <NavbarStyled>
      <NavbarContainer>
        <a href="/" onClick={(e) => handleClick(e, "/")}>
          <NavbarLogo
            src="svg/logo_full_navbar.svg"
            alt="Navbar_Logo"
            width="120"
            height="30"
          />
        </a>
        <NavbarMenu>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
