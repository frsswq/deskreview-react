import { MainStyled } from "../common/styles/CommonStyled.tsx";
import Work from "./Work.tsx";
import About from "./About.tsx";
import Services from "./Services.tsx";
import Contact from "./Contact.tsx";

export default function HomeMain() {
  return (
    <MainStyled>
      <About />
      <Work />
      <Services />
      <Contact />
    </MainStyled>
  );
}
