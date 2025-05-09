import {
  SectionContainer,
  DefaultTitle,
} from "../common/styles/CommonStyled.tsx";
import { ManifestoText, ManifestoQuote } from "./styles/AboutStyled.tsx";

export default function About() {
  return (
    <SectionContainer>
      <DefaultTitle>Manifesto</DefaultTitle>
      <ManifestoText>
        <span>To Seek for The Sun</span>–A commitment to constantly exploring
        innovative and emerging sciences in marketing and branding. We focus on
        crafting strategies that seamlessly position brands within the hearts
        and minds of society, ensuring they resonate deeply with their audience.
        Each project we undertake is a journey—an exploration for the{" "}
        <span>“ideal truth”</span> : we are inspired by the understanding that
        the branding and marketing science is ever-evolving and dynamic.
      </ManifestoText>
      <ManifestoText>
        Our mission transcends traditional branding; we aim to harmonize the
        rationality of the left brain with the creativity of the right brain,
        empowering businesses to navigate the complexities of modern markets. In
        today’s fast-paced, information-rich, and time-poor world, a brand’s
        value is determined by how effortlessly it enables customers to say{" "}
        <span>“yes.”</span>
      </ManifestoText>
      <ManifestoText>
        Branding, as we see it, is the art of connecting sound strategy with
        brilliant creativity. A strong brand pairs these elements to create
        symbols and messages that resonate with customers, far beyond product
        features, benefits, or price.
      </ManifestoText>
      <ManifestoText>
        Our ultimate goal is to help brands become charismatic entities that
        inspire belief in their uniqueness. A charismatic brand is irreplaceable
        in the eyes of its audience, and we firmly believe that with the right
        approach, any brand—<span>yours included</span>
        —can achieve this distinction.
      </ManifestoText>
      <ManifestoQuote>
        <p>
          A brand is not what you say it is; <br />
          It's what they say it is
        </p>
        <p id="work">- Marty Neumeier</p>
      </ManifestoQuote>
    </SectionContainer>
  );
}
