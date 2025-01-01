import {
  WorkContentContainer,
  WorkItemStyled,
  Divider,
} from "./styles/WorkContentStyled.tsx";

export default function WorkContent() {
  return (
    <WorkContentContainer>
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
    </WorkContentContainer>
  );
}

interface WorkProps {
  companyName: string;
}

function WorkItem({ companyName }: WorkProps) {
  return (
    <WorkItemStyled>
      <p>{companyName}</p>
    </WorkItemStyled>
  );
}
