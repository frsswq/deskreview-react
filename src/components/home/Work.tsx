import { useState } from "react";
import {
  SectionContainer,
  DefaultTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import WorkItem from "./WorkItemButton.tsx";
import WorkItemDetail from "./WorkItemDetail.tsx";
import { WorkItemTestData } from "../../data/home/workItemTestData";
import { workItemTestDataTypes } from "../../types/homeTypes";

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
      {WorkItemTestData.map(
        (workItem: workItemTestDataTypes, index: number) => (
          <div key={index}>
            <WorkItem
              isOpen={openItemIndex === index}
              onClick={() => toggleItem(index)}
              clientName={workItem.clientName}
            />
            <WorkItemDetail
              servicesItems={workItem.servicesItems}
              date={workItem.date}
              industry={workItem.industry}
              detail={workItem.detail}
              images={workItem.images}
              isOpen={openItemIndex === index}
            />
            <Divider />
          </div>
        )
      )}
    </SectionContainer>
  );
}
