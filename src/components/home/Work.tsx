import {
  Container,
  HomeTitle,
  Divider,
  HomeItemTitle,
} from "../common/styles/CommonStyled.tsx";
import { WorkStyled } from "./styles/WorkStyled.tsx";
import { workItemData } from "../../data/home/WorkItemData.ts";
import { WorkItem } from "./WorkItem.tsx";
import { useState } from "react";

export default function Work() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <WorkStyled>
      <Container>
        <HomeTitle>Works</HomeTitle>
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
      </Container>
    </WorkStyled>
  );
}
