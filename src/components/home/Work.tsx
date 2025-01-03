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
          />
          <Divider />
          <WorkItem companyName="Telkomsel" />
          <Divider />
          <WorkItem companyName="Salam Ganesha Academy" />
          <Divider />
          <WorkItem companyName="Rococo Group Indonesia" />
          <Divider />
          <WorkItem companyName="Hayati Karya Lestari" />
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
}

function WorkItem({
  companyName,
  servicesItems = [],
  year,
  industry,
}: WorkProps) {
  return (
    <>
      <WorkItemStyled>
        <p>{companyName}</p>
        <CaretDownIcon />
      </WorkItemStyled>
      <WorkItemDetailStyled>
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
      </WorkItemDetailStyled>
    </>
  );
}
