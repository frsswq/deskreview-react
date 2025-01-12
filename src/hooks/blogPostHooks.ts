import { useEffect, useState, RefObject } from "react";

export const useBlogPostImageModal = (contentRef: RefObject<HTMLElement>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const handleImageClick = (event: Event) => {
      const target = event.target as HTMLImageElement;
      setSelectedImage(target.src);
    };

    const images = contentRef.current.querySelectorAll("img");
    images.forEach((image) => {
      image.addEventListener("click", handleImageClick);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleImageClick);
      });
    };
  }, [contentRef]);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return { selectedImage, closeModal };
};

export const useBlogPostFixIndent = () => {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      if (
        heading.textContent?.startsWith("W") ||
        heading.textContent?.startsWith("T")
      ) {
        heading.classList.add("indent-fix");
      }
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if ((paragraph as HTMLElement).style.textAlign === "center") {
        paragraph.classList.add("text-center");
      }
    });
  }, []);
};
