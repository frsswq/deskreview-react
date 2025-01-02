import { MainStyled } from "./styles/MainStyled.tsx";
import Work from "./Work.tsx";
import About from "./About.tsx";

export default function Main() {
  return (
    <MainStyled>
      <About />
      <Work />
    </MainStyled>
  );
}
