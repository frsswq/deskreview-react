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
import { useImageModal } from "../../hooks/blogPostImageModal.ts";
import { formatDateBlogUtil } from "../../utils/dateUtil.ts";

export default function BlogPostMain({ frontmatter, children }: BlogPostProps) {
  const { title, date, tag, author } = frontmatter;
  const formattedDate = date ? formatDateBlogUtil(date) : null;
  const { selectedImage, closeModal } = useImageModal(children);

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
        <BlogPostContentImageModal onClick={closeModal}>
          <img src={selectedImage} alt="Full sized image" />
        </BlogPostContentImageModal>
      )}
    </MainStyled>
  );
}
