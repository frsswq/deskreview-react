import {
  WorkContentContainer,
  WorkItemStyled,
  Divider,
} from "./styles/WorkContentStyled.tsx";

export default function WorkContent() {
  return (
    <WorkContentContainer>
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
    </WorkContentContainer>
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
      <a>{companyName}</a>
      <p>{companyIndustry}</p>
      <p>{projectYear}</p>
    </WorkItemStyled>
  );
}
