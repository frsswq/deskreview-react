import {
  NavbarStyled,
  NavbarContainer,
  NavbarLogo,
} from "./styles/NavbarStyled.tsx";
import navbarLogo from "../assets/svg/logo_full_navbar.svg";

export default function Navbar() {
  // const navbarRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (navbarRef.current) {
  //     const navbarHeight = navbarRef.current.offsetHeight;
  //     document.body.style.marginTop = `${navbarHeight}px`;
  //   }
  // }, []);

  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarLogo src={navbarLogo} alt="" />
      </NavbarContainer>
    </NavbarStyled>
  );
}
