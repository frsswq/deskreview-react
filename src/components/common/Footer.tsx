import { StyledFooter } from "./styles/FooterStyled.tsx";

export default function Footer() {
  const today = new Date();
  const formattedTime = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  return (
    <StyledFooter>
      <p>© 2025, Deskreview - {formattedTime}</p>
    </StyledFooter>
  );
}
