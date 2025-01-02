import { Container, HomeTitle } from "../common/styles/CommonStyled.tsx";
import { AboutStyled, AboutManifesto } from "./styles/AboutStyled.tsx";

export default function About() {
  return (
    <AboutStyled>
      <Container>
        <AboutManifesto>
          <HomeTitle>Manifesto</HomeTitle>
          <p>
            To Seek for The Sun–A commitment to constantly exploring innovative
            and emerging sciences in marketing and branding. We focus on
            crafting strategies that seamlessly position brands within the
            hearts and minds of society, ensuring they resonate deeply with
            their audience. Each project we undertake is a journey—an
            exploration for the “ideal truth”: we are inspired by the
            understanding that the branding and marketing science is
            ever-evolving and dynamic.
          </p>
          <p>
            Our mission transcends traditional branding; we aim to harmonize the
            rationality of the left brain with the creativity of the right
            brain, empowering businesses to navigate the complexities of modern
            markets. In today’s fast-paced, information-rich, and time-poor
            world, a brand’s value is determined by how effortlessly it enables
            customers to say “yes.”
          </p>
          <p>
            Branding, as we see it, is the art of connecting sound strategy with
            brilliant creativity. A strong brand pairs these elements to create
            symbols and messages that resonate with customers, far beyond
            product features, benefits, or price.
          </p>
          <p>
            Our ultimate goal is to help brands become charismatic entities that
            inspire belief in their uniqueness. A charismatic brand is
            irreplaceable in the eyes of its audience, and we firmly believe
            that with the right approach, any brand—yours included—can achieve
            this distinction.
          </p>
          <blockquote>
            <p>"A Brand Is Not What You Say It Is;</p>
            <p>It's What They Say It Is"</p>
            <p>- Marty Neumeier</p>
          </blockquote>
        </AboutManifesto>
      </Container>
    </AboutStyled>
  );
}
