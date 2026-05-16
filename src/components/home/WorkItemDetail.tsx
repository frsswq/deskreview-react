import type { workItemDetailProps } from "../../types/homeTypes";
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
        (prevIndex) => (prevIndex + 1) % projectImages.length,
      );
    }
  };

  const gridClassName = "work-item-grid grid grid-cols-[1fr_2fr]";
  const titleClassName = "title text-desk-lg font-normal max-md:text-desk-sm";
  const textClassName =
    "text max-w-[27ch] [overflow-wrap:anywhere] text-desk-lg max-md:text-desk-sm";

  return (
    <div
      className={`flex flex-col gap-y-3 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] max-md:gap-y-2 ${
        isOpen ? "max-h-[3000px] visible" : "max-h-0 invisible"
      }`}
    >
      <div className={gridClassName}>
        <p className={titleClassName}>Services</p>
        <ul className="grid gap-y-1 max-md:gap-y-0.5">
          {servicesItems.map((item, index) => (
            <li className={`${textClassName} list-none`} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={gridClassName}>
        <p className={titleClassName}>Year</p>
        <p className={textClassName}>{projectYear}</p>
      </div>
      <div className={gridClassName}>
        <p className={titleClassName}>Industry</p>
        <p className={textClassName}>{clientIndustry}</p>
      </div>
      <div className={gridClassName}>
        <p className={titleClassName}>Description</p>
        <p className={textClassName}>{projectDetail}</p>
      </div>
      {projectImages.length > 0 && (
        <div className={gridClassName}>
          <p className={titleClassName}>
            {projectImages.length === 1 ? "Picture" : "Pictures"} <br />
            {currentImageIndex + 1} ⁄ {projectImages.length}
          </p>
          <img
            className="mr-auto h-auto max-h-full max-w-[85%] cursor-pointer rounded-lg border-[1.5px] border-desk-gray-700 object-contain max-md:max-w-[95%]"
            src={projectImages[currentImageIndex]}
            onClick={handleImageClick}
            width="340"
            height="425"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
}
