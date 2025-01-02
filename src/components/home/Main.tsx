import { MainStyled } from "./styles/MainStyled.tsx";
import Work from "./Work.tsx";
import About from "./About.tsx";
import Services from "./Services.tsx";

export default function Main() {
  return (
    <MainStyled>
      <About />
      <Work />
      <Services />
    </MainStyled>
  );
}
