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
            companyIndustry="Vehicle Manufacture"
            projectYear="2023"
          />
          <Divider />
          <WorkItem
            companyName="Telkomsel"
            companyIndustry="Telecommunication"
            projectYear="2023"
          />
          <Divider />
          <WorkItem
            companyName="Salam Ganesha Academy"
            companyIndustry="Education Tech"
            projectYear="2024"
          />
          <Divider />
          <WorkItem
            companyName="Rococo Group Indonesia"
            companyIndustry="Luxury Fashion Retail"
            projectYear="2023"
          />
          <Divider />
          <WorkItem
            companyName="Hayati Karya Lestari"
            companyIndustry="NGO"
            projectYear="2023"
          />
          <Divider />
        </WorkItemContainer>
      </Container>
    </WorkStyled>
  );
}

interface WorkProps {
  companyName: string;
  companyIndustry: string;
  projectYear: string;
}

function WorkItem({ companyName, companyIndustry, projectYear }: WorkProps) {
  return (
    <WorkItemStyled>
      <p>{companyName}</p>
      <p>{companyIndustry}</p>
      <p>{projectYear}</p>
    </WorkItemStyled>
  );
}

function WorkDetail() {
  return (
    <WorkDetailStyled>
      <p>Company</p>
      <p>Industry</p>
      <p>Year</p>
    </WorkDetailStyled>
  );
}
