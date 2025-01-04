import {
  Container,
  HomeTitle,
  Divider,
} from "../common/styles/CommonStyled.tsx";
import { WorkStyled, WorkItemContainer } from "./styles/WorkStyled.tsx";
import { workItemData } from "./data/WorkItemData.ts";
import { WorkDetail, WorkItem } from "./WorkItem.tsx";
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
        <WorkItemContainer>
          <WorkDetail />
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
        </WorkItemContainer>
      </Container>
    </WorkStyled>
  );
}
