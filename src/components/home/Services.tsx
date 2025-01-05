import { ServicesItemContainer } from "./styles/ServicesStyled.tsx";
import {
  SectionContainer,
  HomeTitle,
  HomeItemTitle,
  HomeItemText,
} from "../common/styles/CommonStyled.tsx";
import { servicesData } from "../../data/home/servicesData.ts";
import { Divider } from "../common/styles/CommonStyled.tsx";

export default function Services() {
  return (
    <SectionContainer>
      <HomeTitle>Services</HomeTitle>
      <ServicesItemContainer>
        {servicesData.map((item) => (
          <div>
            <HomeItemTitle>{item.type}</HomeItemTitle>
            <Divider />
            {item.services.map((i) => (
              <>
                <HomeItemText>{i}</HomeItemText>
                <Divider />
              </>
            ))}
          </div>
        ))}
      </ServicesItemContainer>
    </SectionContainer>
  );
}
