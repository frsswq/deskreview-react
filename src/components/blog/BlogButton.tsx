import { BlogButtonStyled } from "./styles/BlogButtonStyled";
import styled from "styled-components";

export default function BlogButton() {
  return (
    <BlogButtonStyled>
      <BlogButtonImage src="blog/method_review/01/oatside_4.png" />
    </BlogButtonStyled>
  );
}

const BlogButtonImage = styled.img`
  margin: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 8px;
`;
