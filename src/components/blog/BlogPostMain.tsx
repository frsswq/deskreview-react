import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;
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

  return (
    <MainStyled>
      <SectionContainer>
        <BlogPostHeader>
          {title && <h1>{title}</h1>}
          <BlogPostHeaderDetail>
            {tag && <p className="tag">{tag}</p>}
            {author && <p className="capitalize author">{author}</p>}
            {formattedDate && <p className="date">{formattedDate}</p>}
          </BlogPostHeaderDetail>
        </BlogPostHeader>
        <BlogPostContent className="prose">{children}</BlogPostContent>
      </SectionContainer>

      {selectedImage && (
        <ImageModal onClick={closeModal}>
          <img src={selectedImage} alt="Full sized image" />
        </ImageModal>
      )}
    </MainStyled>
  );
}

const BlogPostHeader = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 24px 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 3.125rem;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  @media (width <= 768px) {
    margin-top: 10px;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
    }
  }
`;

const BlogPostHeaderDetail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    font-family: "EB Garamond", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .author {
    font-weight: 500;
  }

  .date {
  }

  @media (width <= 768px) {
  }
`;

const BlogPostContent = styled.article`
  margin-top: 2rem;
  min-width: 100%;

  p,
  li {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.6;
    color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "EB Garamond", serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  blockquote {
    quotes: none;
    font-style: italic;
  }

  img {
    cursor: zoom-in;
  }

  table {
    font-family: "DM Sans", sans-serif;
  }

  .text-center {
    font-family: "DM Sans", sans-serif;
    text-align: center;
    font-size: var(--text-sm);
    color: rgba(var(--desk-gray-700), 0.8);
    transform: translateY(-100%);
    margin-bottom: 0;

    a {
      color: rgba(var(--desk-gray-700), 0.8);

      &:hover {
        color: rgba(var(--desk-gray-700), 1);
      }
    }
  }

  h1.indent-fix,
  h2.indent-fix {
    text-indent: -0.15em;
  }

  h3.indent-fix,
  h4.indent-fix,
  h5.indent-fix,
  h6.indent-fix {
    text-indent: -0.1em;
  }

  @media (width <= 768px) {
    p,
    li {
      font-size: var(--text-xl);
    }

    h1 {
      font-size: 30px;
    }

    .text-center {
      transform: translateY(-50%);
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--desk-black), 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    cursor: zoom-out;
    max-width: 90%;
    max-height: 90%;
  }
`;
