import {
  WorkItemDetailStyled,
  WorkItemGrid,
} from "./styles/WorkItemDetailStyled.tsx";
import { workItemDetailProps } from "../../types/homeTypes";
import { usePreloadImages } from "../../hooks/preloadImages";
import { useState } from "react";

export default function WorkItemDetail({
  servicesItems = [],
  year,
  industry,
  detail,
  images = [],
  isOpen,
}: workItemDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  usePreloadImages(images);

  const handleImageClick = (): void => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <WorkItemDetailStyled isOpen={isOpen}>
      <WorkItemGrid>
        <p className="title">Services</p>
        <ul>
          {servicesItems.map((item) => (
            <li className="text">{item}</li>
          ))}
        </ul>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Year</p>
        <p className="text">{year}</p>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Industry</p>
        <p className="text">{industry}</p>
      </WorkItemGrid>
      <WorkItemGrid>
        <p className="title">Description</p>
        <p className="text">{detail}</p>
      </WorkItemGrid>
      {images.length > 0 && (
        <WorkItemGrid>
          <p className="title">
            {images.length === 1 ? "Picture" : "Pictures"} <br />
            {currentImageIndex + 1} ⁄ {images.length}
          </p>
          <img
            src={images[currentImageIndex]}
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
