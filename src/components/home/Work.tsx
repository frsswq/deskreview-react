import { useState } from "react";
import {
  SectionContainer,
  HomeTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import WorkItem from "./WorkItem.tsx";
import WorkItemDetail from "./WorkItemDetail.tsx";
import { workItemData } from "../../data/home/workItemData";
import { workItemTypes } from "../../types/homeTypes";

export default function Work() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionContainer>
      <HomeTitle style={{ textIndent: "-0.15em" }}>Works</HomeTitle>
      <HomeItemTitle>Company</HomeItemTitle>
      <Divider />
      {workItemData.map((workItem: workItemTypes, index: number) => (
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
