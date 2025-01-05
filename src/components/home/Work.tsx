import {
  SectionContainer,
  HomeTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import { workItemData } from "../../data/home/workItemData.ts";
import { WorkItem } from "./WorkItem.tsx";
import { useState } from "react";

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
      {workItemData.map((item, index) => (
        <>
          <WorkItem
            key={index}
            isOpen={openItemIndex === index}
            onClick={() => toggleItem(index)}
            {...item}
          />
          <Divider />
        </>
      ))}
    </SectionContainer>
  );
}
