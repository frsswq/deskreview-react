import type { BlogPostProps } from "../../types/blogTypes.ts";
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
    <main className="desk-main">
      <meta name="author" content={author} />
      <meta name="keywords" content={tag} />
      <section className="desk-section">
        <article className="mt-4 mb-8 flex flex-col gap-y-6 max-md:mt-2 max-md:mb-6 max-md:gap-y-4">
          {title && (
            <h1 className="font-serif text-[52px] leading-[1.2] font-medium tracking-[-0.04em] [overflow-wrap:anywhere] italic max-md:text-4xl">
              {title}
            </h1>
          )}
          {displayHeaderDetail && (
            <div className="flex flex-col">
              {tag && (
                <p className="mb-2 font-serif text-desk-base font-normal text-desk-gray-700 uppercase max-md:text-desk-lg">
                  {tag}
                </p>
              )}
              {author && (
                <p className="text-desk-base font-medium capitalize max-md:text-desk-lg">
                  {author}
                </p>
              )}
              {formattedDate && (
                <p className="text-desk-base font-normal max-md:text-desk-lg">{formattedDate}</p>
              )}
            </div>
          )}
        </article>
        <article className="blog-post-content" ref={contentRef}>
          {children}
        </article>
      </section>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 z-[1000] flex h-full w-full items-center justify-center bg-desk-black/80"
          onClick={closeModal}
        >
          <img
            className="max-h-[90%] max-w-[90%] cursor-zoom-out"
            src={selectedImage}
            alt="Full sized image"
          />
        </div>
      )}
    </main>
  );
}
