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

export default function BlogMain() {
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
