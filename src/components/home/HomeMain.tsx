import { MainStyled } from "../common/styles/CommonStyled.tsx";
import Work from "./Work.tsx";
import About from "./About.tsx";
import Services from "./Services.tsx";
import Contact from "./Contact.tsx";
import { useEffect } from "react";

export default function HomeMain() {
  useEffect(() => {
    document.title = "Deskreview | Brand and Marketing Strategy Studies";
  });

  return (
    <MainStyled>
      <meta name="author" content="Deskreview" />
      <About />
      <Work />
      <Services />
      <Contact />
    </MainStyled>
  );
}
