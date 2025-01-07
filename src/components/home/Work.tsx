import { useState } from "react";
import {
  SectionContainer,
  DefaultTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import WorkItem from "./WorkItemButton.tsx";
import WorkItemDetail from "./WorkItemDetail.tsx";
import { workItemData } from "../../data/home/workItemData";
import { workItemDataTypes } from "../../types/homeTypes";

export default function Work() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionContainer>
      <DefaultTitle style={{ textIndent: "-0.15em" }}>Works</DefaultTitle>
      <HomeItemTitle>Company</HomeItemTitle>
      <Divider />
      {workItemData.map((workItem: workItemDataTypes, index: number) => (
        <>
          <WorkItem
            key={index}
            isOpen={openItemIndex === index}
            onClick={() => toggleItem(index)}
            companyName={workItem.companyName}
          />
          <WorkItemDetail
            servicesItems={workItem.servicesItems}
            year={workItem.year}
            industry={workItem.industry}
            detail={workItem.detail}
            images={workItem.images}
            isOpen={openItemIndex === index}
          />
          <Divider />
        </>
      ))}
    </SectionContainer>
  );
}
