import { WorkItemStyled } from "./styles/WorkItemStyled.tsx";
import { HomeItemText } from "../common/styles/CommonStyled.tsx";
import { workItemButtonTypes } from "../../types/homeTypes";
import { CaretDownIcon } from "@radix-ui/react-icons";

export function WorkItem({
  companyName,
  isOpen,
  onClick,
}: workItemButtonTypes) {
  return (
    <WorkItemStyled onClick={onClick} isOpen={isOpen}>
      <HomeItemText>{companyName}</HomeItemText>
      <CaretDownIcon />
    </WorkItemStyled>
  );
}
