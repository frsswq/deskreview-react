import {
  DefaultTitle,
  MainStyled,
  SectionContainer,
  Divider,
} from "../common/styles/CommonStyled";
import { BlogButtonContainer } from "./styles/BlogButtonStyled";

export default function BlogMain() {
  return (
    <MainStyled>
      <SectionContainer>
        <DefaultTitle>Study</DefaultTitle>
        <BlogButtonContainer>
          <Divider />
        </BlogButtonContainer>
      </SectionContainer>
    </MainStyled>
  );
}
