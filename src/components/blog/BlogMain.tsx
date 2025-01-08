import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";
import { blogPageData } from "../../data/blog/blogPage";
import { blogPageDataTypes } from "../../types/homeTypes";
import BlogButton from "./BlogButton";

// interface MDXModule {
//   default: React.ComponentType;
// }

export default function BlogMain() {
  // const mdxFiles = import.meta.glob<MDXModule>("../contents/*.mdx", {
  //   eager: true,
  // });

  // const blogLinks = Object.entries(mdxFiles).map(([path, module]) => {
  //   const fileName = path.match(/\/([^/]+)\.mdx$/)?.[1] || "";
  //   const title = module.title || fileName;

  //   return {
  //     path: fileName,
  //     title: title,
  //   };
  // });

  return (
    <MainStyled>
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <Divider />
          {blogPageData.map((pageData: blogPageDataTypes, index: number) => (
            <BlogButton key={index} {...pageData} />
          ))}
        </BlogButtonContainer>
      </SectionContainer>
    </MainStyled>
  );
}
