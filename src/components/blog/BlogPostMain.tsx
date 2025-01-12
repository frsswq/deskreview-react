import {
  MainStyled,
  SectionContainer,
} from "../../components/common/styles/CommonStyled.tsx";
import {
  BlogPostHeader,
  BlogPostHeaderDetail,
} from "./styles/BlogPostHeaderStyled.tsx";
import {
  BlogPostContent,
  BlogPostContentImageModal,
} from "./styles/BlogPostContentStyled.tsx";
import { BlogPostProps } from "../../types/blogTypes.ts";
import {
  useBlogPostImageModal,
  useBlogPostFixIndent,
} from "../../hooks/blogPostHooks.ts";
import { useRef } from "react";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;
  const contentRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const { selectedImage, closeModal } = useBlogPostImageModal(contentRef);
  useBlogPostFixIndent();

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
        <BlogPostContent ref={contentRef} className="prose">
          {children}
        </BlogPostContent>
      </SectionContainer>

      {selectedImage && (
        <BlogPostContentImageModal onClick={closeModal}>
          <img src={selectedImage} alt="Full sized image" />
        </BlogPostContentImageModal>
      )}
    </MainStyled>
  );
}
