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
  useTextCenterFix,
} from "../../hooks/blogPostHooks.ts";
import { useRef, useEffect } from "react";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;
  const contentRef = useRef<HTMLElement>(null as unknown as HTMLElement);
  const { selectedImage, closeModal } = useBlogPostImageModal(contentRef);
  useBlogPostFixIndent(contentRef);
  useTextCenterFix();

  const displayHeaderDetail = tag && author && formattedDate;

  useEffect(() => {
    document.title = `${title} | Deskreview`;
  }, [title]);

  return (
    <MainStyled>
      <meta name="author" content={author} />
      <meta name="keywords" content={tag} />
      <SectionContainer>
        <BlogPostHeader>
          {title && <h1>{title}</h1>}
          {displayHeaderDetail && (
            <BlogPostHeaderDetail>
              {tag && <p className="tag">{tag}</p>}
              {author && <p className="author">{author}</p>}
              {formattedDate && <p className="date">{formattedDate}</p>}
            </BlogPostHeaderDetail>
          )}
        </BlogPostHeader>
        <BlogPostContent ref={contentRef}>{children}</BlogPostContent>
      </SectionContainer>

      {selectedImage && (
        <BlogPostContentImageModal onClick={closeModal}>
          <img src={selectedImage} alt="Full sized image" />
        </BlogPostContentImageModal>
      )}
    </MainStyled>
  );
}
