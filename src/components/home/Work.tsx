import { useState } from "react";
import {
  SectionContainer,
  DefaultTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import WorkItem from "./WorkItemButton.tsx";
import WorkItemDetail from "./WorkItemDetail.tsx";
import { sortedWorkItemData } from "../../data/home/workItemData.ts";
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
      {sortedWorkItemData.map((workItem: workItemDataTypes, index: number) => (
        <div key={index}>
          <WorkItem
            isOpen={openItemIndex === index}
            onClick={() => toggleItem(index)}
            clientName={workItem.clientName}
          />
          <WorkItemDetail
            servicesItems={workItem.servicesItems}
            projectYear={workItem.projectYear}
            clientIndustry={workItem.clientIndustry}
            projectDetail={workItem.projectDetail}
            projectImages={workItem.projectImages}
            isOpen={openItemIndex === index}
          />
          <Divider />
        </div>
      ))}
    </SectionContainer>
  );
}
