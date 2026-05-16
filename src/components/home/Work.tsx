import { useState } from "react";
import WorkItem from "./WorkItemButton.tsx";
import WorkItemDetail from "./WorkItemDetail.tsx";
import { sortedWorkItemData } from "../../data/home/workItemData.ts";
import type { workItemDataTypes } from "../../types/homeTypes";

export default function Work() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="desk-section">
      <h1 className="desk-title indent-[-0.15em]">Works</h1>
      <h2 className="home-item-title">Company</h2>
      <hr className="desk-divider" />
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
          <hr className="desk-divider" />
        </div>
      ))}
    </section>
  );
}
