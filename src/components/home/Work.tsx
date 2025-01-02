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
          <WorkItem companyName="Astra Honda" />
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

interface WorkProps {
  companyName: string;
}

function WorkItem({ companyName }: WorkProps) {
  return (
    <WorkItemStyled>
      <p>{companyName}</p>
      <span>&gt;</span>
    </WorkItemStyled>
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
