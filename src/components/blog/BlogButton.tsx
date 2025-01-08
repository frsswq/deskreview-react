import {
  BlogButtonStyled,
  BlogButtonImage,
  BlogButtonDetailContainer,
} from "./styles/BlogButtonStyled";
import { blogPageDataTypes } from "../../types/homeTypes";

export default function BlogButton({
  pageImage,
  title,
  category,
}: blogPageDataTypes) {
  return (
    <div>
      <BlogButtonStyled>
        <BlogButtonImage src={pageImage} />
      </BlogButtonStyled>
      <BlogButtonDetailContainer>
        <p>{title}</p>
        <p>{category}</p>
      </BlogButtonDetailContainer>
    </div>
  );
}
