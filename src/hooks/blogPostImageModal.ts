import { useEffect, useState } from "react";

export const useImageModal = (children: React.ReactNode) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      if (
        (heading.textContent && heading.textContent.startsWith("W")) ||
        (heading.textContent && heading.textContent.startsWith("T"))
      ) {
        heading.classList.add("indent-fix");
      }
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if (paragraph.style.textAlign === "center") {
        paragraph.classList.add("text-center");
      }
    });

    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.addEventListener("click", () => {
        setSelectedImage(image.src);
      });
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", () => {
          setSelectedImage(image.src);
        });
      });
    };
  }, [children]);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return { selectedImage, closeModal };
};
