import { DefaultTitle, MainStyled } from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";
import { BlogListContainer } from "./styles/BlogMainStyled";
import BlogButton from "./BlogButton";

export default function BlogMain() {
  return (
    <MainStyled>
      <BlogListContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <BlogButton></BlogButton>
          <BlogButton></BlogButton>
        </BlogButtonContainer>
      </BlogListContainer>
    </MainStyled>
  );
}
