import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function useNavbarNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const id = target.slice(1);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToElement(id);
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
