import {
  WorkItemDetailStyled,
  WorkItemGrid,
} from "./styles/WorkItemDetailStyled.tsx";
import { workItemDetailProps } from "../../types/homeTypes";
import { usePreloadImages } from "../../hooks/preloadImages";
import { useState } from "react";

export default function WorkItemDetail({
  servicesItems = [],
  projectYear,
  clientIndustry,
  projectDetail,
  projectImages = [],
  isOpen,
}: workItemDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  usePreloadImages(projectImages);

  const handleImageClick = (): void => {
    if (projectImages.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projectImages.length
      );
    }
  };

  return (
    <WorkItemDetailStyled $isOpen={isOpen}>
      <WorkItemGrid>
        <p className="title">Services</p>
        <ul>
          {servicesItems.map((item, index) => (
            <li key={index} className="text">
              {item}
            </li>
          ))}
        </ul>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Year</p>
        <p className="text">{projectYear}</p>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Industry</p>
        <p className="text">{clientIndustry}</p>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Description</p>
        <p className="text">{projectDetail}</p>
      </WorkItemGrid>
      {projectImages.length > 0 && (
        <WorkItemGrid>
          <p className="title">
            {projectImages.length === 1 ? "Picture" : "Pictures"} <br />
            {currentImageIndex + 1} ⁄ {projectImages.length}
          </p>
          <img
            src={projectImages[currentImageIndex]}
            onClick={handleImageClick}
            width="340"
            height="425"
            loading="eager"
          />
        </WorkItemGrid>
      )}
    </WorkItemDetailStyled>
  );
}
