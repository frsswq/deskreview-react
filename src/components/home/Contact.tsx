import { SectionContainer, DefaultTitle } from "../common/styles/CommonStyled";
import { ContactContainer, ContactButton } from "./styles/ContactStyled";
import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <SectionContainer>
      <DefaultTitle id="contact">Get in touch</DefaultTitle>
      <ContactContainer>
        <ContactButton href="mailto:dzaki.zaidan@gmail.com" target="_blank">
          <p>Email us</p>
          <EnvelopeClosedIcon />
        </ContactButton>
        <ContactButton href="https://wa.me/+6285159177206" target="_blank">
          <p>Chat with us</p>
          <ChatBubbleIcon />
        </ContactButton>
        <ContactButton
          href="https://www.instagram.com/deskreview/"
          target="_blank"
        >
          <p>Follow us</p>
          <InstagramLogoIcon />
        </ContactButton>
      </ContactContainer>
    </SectionContainer>
  );
}
