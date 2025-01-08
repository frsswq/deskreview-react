import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
} from "./styles/NavbarStyled.tsx";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    if (target.startsWith("#")) {
      const id = target.slice(1);
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (location.pathname === target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(target);
      }
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

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
          <a href="#work" onClick={(e) => handleClick(e, "#work")}>
            Work
          </a>
          <a href="/" onClick={(e) => handleClick(e, "/")}>
            About
          </a>
          <a href="/blog" onClick={(e) => handleClick(e, "/blog")}>
            Study
          </a>
          <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
            Contact
          </a>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
}
