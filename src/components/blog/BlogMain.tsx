import { Link } from "react-router";
import {
  fetchMarkdownFilesUtil,
  sortMarkdownFilesUtil,
  generateLinksUtil,
} from "../../utils/mdUtil";
import { useEffect } from "react";

export default function BlogMain() {
  const markdownFiles = fetchMarkdownFilesUtil();
  const sortedEntries = sortMarkdownFilesUtil(markdownFiles);
  const links = generateLinksUtil(sortedEntries);

  useEffect(() => {
    document.title = "Study | Deskreview";
  });

  return (
    <main className="desk-main">
      <meta name="author" content="Deskreview" />
      <section className="desk-section">
        <h1 className="desk-title">Study</h1>
        {links.length > 0 && (
          <div className="flex flex-col gap-y-2 max-md:mt-4">
            <hr className="desk-divider" />
            {links.map(({ title, path, date }) => (
              <div key={path}>
                <Link
                  className="blog-link flex items-center justify-between no-underline"
                  to={path}
                >
                  {date && (
                    <p className="blog-date mr-3 font-serif text-desk-base leading-[1.6] whitespace-nowrap text-desk-gray-700 max-md:mr-2 max-md:text-desk-base">
                      {date}
                    </p>
                  )}
                  <p className="blog-title w-full overflow-hidden font-serif text-desk-xl leading-[1.6] text-ellipsis whitespace-nowrap">
                    {title}
                  </p>
                </Link>
                <hr className="desk-divider" />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
