import { ServicesItemContainer } from "./styles/ServicesStyled.tsx";
import {
  SectionContainer,
  HomeTitle,
  HomeItemTitle,
  HomeItemText,
} from "../common/styles/CommonStyled.tsx";
import { servicesData } from "../../data/home/servicesData";
import { servicesDataTypes } from "../../types/homeTypes";
import { Divider } from "../common/styles/CommonStyled.tsx";

export default function Services() {
  return (
    <SectionContainer>
      <HomeTitle>Services</HomeTitle>
      <ServicesItemContainer>
        {servicesData.map((servicesCategory: servicesDataTypes) => (
          <div key={servicesCategory.type}>
            <HomeItemTitle>{servicesCategory.type}</HomeItemTitle>
            <Divider />
            {servicesCategory.service.map((serviceName) => (
              <div key={`${servicesCategory.type}-${serviceName}`}>
                <HomeItemText>{serviceName}</HomeItemText>
                <Divider />
              </div>
            ))}
          </div>
        ))}
      </ServicesItemContainer>
    </SectionContainer>
  );
}
