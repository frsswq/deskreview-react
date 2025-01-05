import {
  ServicesStyled,
  ServicesItemContainer,
} from "./styles/ServicesStyled.tsx";
import {
  Container,
  HomeTitle,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import { servicesData } from "../../data/home/ServicesData.ts";
import { Divider } from "../common/styles/CommonStyled.tsx";

export default function Services() {
  return (
    <ServicesStyled>
      <Container>
        <HomeTitle>Services</HomeTitle>
        <ServicesItemContainer>
          {servicesData.map((item) => (
            <>
              <HomeItemTitle>{item.type}</HomeItemTitle>
              <Divider />
              {item.services.map((i) => (
                <>
                  <p className="text">{i}</p>
                  <Divider />
                </>
              ))}
            </>
          ))}
        </ServicesItemContainer>
      </Container>
    </ServicesStyled>
  );
}
