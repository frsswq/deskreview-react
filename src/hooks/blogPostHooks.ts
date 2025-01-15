import { useEffect, useState, useCallback, RefObject } from "react";

export const useBlogPostImageModal = (contentRef: RefObject<HTMLElement>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const handleImageClick = (event: Event) => {
      const target = event.target as HTMLImageElement;
      if (target.tagName.toLowerCase() === "img") {
        setSelectedImage(target.src);
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener("click", handleImageClick);

    return () => {
      contentElement.removeEventListener("click", handleImageClick);
    };
  }, [contentRef]);

  return { selectedImage, closeModal };
};

export const useBlogPostFixIndent = (contentRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading) => {
      if (
        heading.textContent?.startsWith("T") ||
        heading.textContent?.startsWith("V") ||
        heading.textContent?.startsWith("W")
      ) {
        heading.classList.add("indent-fix-big");
      }

      if (
        heading.textContent?.startsWith("Y") ||
        heading.textContent?.startsWith("U")
      ) {
        heading.classList.add("indent-fix-small");
      }
    });
  }, [contentRef]);
};

export const useTextCenterFix = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if ((paragraph as HTMLElement).style.textAlign === "center") {
        paragraph.classList.add("text-center");
      }
    });
  });
};
