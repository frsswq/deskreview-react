import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";
import navbarNavigation from "../../hooks/navbarNavigation.ts";
import { Link } from "react-router";
import React from "react";
import logoSvg from "/svg/logo_full_navbar.svg";

function Navbar() {
  const { handleClick } = navbarNavigation();

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "/", label: "Home" },
    { href: "/study", label: "Study" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarLogo
          src={logoSvg}
          alt="Navbar_Logo"
          width="120"
          height="22"
          aria-label="Home"
          onClick={(e) => handleClick(e, "/")}
        />
        <NavbarMenu>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}

export default React.memo(Navbar);
