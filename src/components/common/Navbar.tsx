import navbarNavigation from "../../hooks/navbarNavigation.ts";
import { Link } from "react-router";
import logoSvg from "/svg/logo_full_navbar.svg";

export default function Navbar() {
  const { handleClick } = navbarNavigation();

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "/", label: "Home" },
    { href: "/study", label: "Study" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-1000 h-auto w-full border-b border-desk-gray-300 bg-desk-white px-5 py-4 max-md:px-4">
      <div className="mx-auto flex w-full max-w-7xl flex-row">
        <img
          className="block h-[22px] w-[120px] cursor-pointer hover:opacity-80"
          src={logoSvg}
          alt="Navbar_Logo"
          width="120"
          height="22"
          aria-label="Home"
          onClick={(e) => handleClick(e, "/")}
        />
        <menu className="ml-auto flex flex-row items-center">
          {menuItems.map((item) => (
            <Link
              className="navbar-link"
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </menu>
      </div>
    </nav>
  );
}
