import { WorkItemStyled } from "./styles/WorkItemStyled.tsx";
import { HomeItemText } from "../common/styles/CommonStyled.tsx";
import { workItemButtonProps } from "../../types/homeTypes.ts";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function WorkItem({
  companyName,
  isOpen,
  onClick,
}: workItemButtonProps) {
  return (
    <WorkItemStyled onClick={onClick} $isOpen={isOpen}>
      <HomeItemText>{companyName}</HomeItemText>
      <CaretDownIcon />
    </WorkItemStyled>
  );
}
