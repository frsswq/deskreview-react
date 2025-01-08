import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function navbarNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (target: string) => {
    if (location.pathname === target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(target);
    }
  };

  const handleClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    if (target.startsWith("#")) {
      const id = target.slice(1);
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        scrollToElement(id);
      }
    } else {
      handleNavigate(target);
    }
  };

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      scrollToElement(scrollToId);
    }
  }, [location.state]);

  return { handleClick };
}
