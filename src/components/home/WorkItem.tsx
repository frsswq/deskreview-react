import { WorkItemStyled } from "./styles/WorkItemStyled.tsx";
import {
  WorkItemDetailStyled,
  WorkItemGrid,
} from "./styles/WorkItemDetailStyled.tsx";
import { HomeItemText } from "../common/styles/CommonStyled.tsx";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

interface WorkProps {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
  isOpen: boolean;
  onClick: () => void;
}

export function WorkItem({
  companyName,
  servicesItems = [],
  year,
  industry,
  detail,
  images = [],
  isOpen,
  onClick,
}: WorkProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleImageClick = (): void => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <>
      <WorkItemStyled onClick={onClick} isOpen={isOpen}>
        <HomeItemText>{companyName}</HomeItemText>
        <CaretDownIcon />
      </WorkItemStyled>
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
    </>
  );
}
