import { WorkItemStyled } from "./styles/WorkItemStyled.tsx";
import { WorkItemDetailStyled } from "./styles/WorkItemDetailStyled.tsx";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface WorkProps {
  companyName: string;
  servicesItems?: string[];
  year?: string;
  industry?: string;
  detail?: string;
  isOpen: boolean;
  onClick: () => void;
}

export function WorkItem({
  companyName,
  servicesItems = [],
  year,
  industry,
  detail,
  isOpen,
  onClick,
}: WorkProps) {
  return (
    <>
      <WorkItemStyled onClick={onClick} isOpen={isOpen}>
        <p>{companyName}</p>
        <CaretDownIcon />
      </WorkItemStyled>
      <WorkItemDetailStyled isOpen={isOpen}>
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
