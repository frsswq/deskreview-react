import {
  DefaultTitle,
  SectionContainer,
  MainStyled,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";
import BlogButton from "./BlogButton";

export default function BlogMain() {
  return (
    <MainStyled>
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <BlogButton></BlogButton>
          <BlogButton></BlogButton>
        </BlogButtonContainer>
      </SectionContainer>
    </MainStyled>
  );
}
