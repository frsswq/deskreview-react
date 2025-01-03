import {
  Container,
  HomeTitle,
  Divider,
} from "../common/styles/CommonStyled.tsx";
import {
  WorkStyled,
  WorkItemStyled,
  WorkDetailStyled,
  WorkItemContainer,
} from "./styles/WorkStyled.tsx";
import { WorkItemDetailStyled } from "./styles/WorkItemDetailStyled.tsx";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Work() {
  return (
    <WorkStyled>
      <Container>
        <HomeTitle>Works</HomeTitle>
        <WorkItemContainer>
          <WorkDetail />
          <Divider />
          <WorkItem
            companyName="Astra Honda"
            servicesItems={[
              "Content Research & Analytic",
              "Digital Trend Analytic",
            ]}
            year="2023"
            industry="Vehicle Manufacture"
            detail="As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market."
          />
          <Divider />
          <WorkItem
            companyName="Telkomsel"
            servicesItems={[
              "Campaign Strategy & Development",
              "Social Media Strategy",
              "Online Activation Development",
            ]}
            year="2023"
            industry="Telecommunication"
            detail="After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers."
          />
          <Divider />
          <WorkItem
            companyName="Salam Ganesha Academy"
            servicesItems={[
              "Campaign Strategy & Development",
              "Social Media Development",
              "Kol Management",
            ]}
            year="2024"
            industry="Education Tech"
            detail="As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition."
          />
          <Divider />
          <WorkItem
            companyName="Rococo Group Indonesia"
            servicesItems={[
              "Campaign Strategy & Development",
              "Social Media Development",
              "Kol Management",
            ]}
            year="2023"
            industry="Luxury Fashion Retail"
            detail="Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong."
          />
          <Divider />
          <WorkItem
            companyName="Hayati Karya Lestari"
            servicesItems={[
              "Branding Strategy",
              "Social Media & Website",
              "Brand Architecture",
            ]}
            year="2023"
            industry="NGO"
            detail="Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia."
          />
          <Divider />
        </WorkItemContainer>
      </Container>
    </WorkStyled>
  );
}

function WorkDetail() {
  return (
    <WorkDetailStyled>
      <p>Company</p>
      <p></p>
    </WorkDetailStyled>
  );
}

interface WorkProps {
  companyName: string;
  servicesItems?: string[];
  year?: string;
  industry?: string;
  detail?: string;
}

function WorkItem({
  companyName,
  servicesItems = [],
  year,
  industry,
  detail,
}: WorkProps) {
  const [isClicked, setIsClicked] = useState(false);
  const clickToggle = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <WorkItemStyled onClick={clickToggle} isClicked={isClicked}>
        <p>{companyName}</p>
        <CaretDownIcon />
      </WorkItemStyled>
      <WorkItemDetailStyled isClicked={isClicked}>
        <p>Services</p>
        <ul>
          {servicesItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Year</p>
        <p>{year}</p>
        <p>Industry</p>
        <p>{industry}</p>
        <p></p>
        <p>{detail}</p>
      </WorkItemDetailStyled>
    </>
  );
}
