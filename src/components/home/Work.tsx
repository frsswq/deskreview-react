import {
  SectionContainer,
  HomeTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import { workItemData } from "../../data/home/workItemData";
import { WorkItem } from "./WorkItem.tsx";
import { useState } from "react";
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
            {...workItem}
          />
          <Divider />
        </>
      ))}
    </SectionContainer>
  );
}
