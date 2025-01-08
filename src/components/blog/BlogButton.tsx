import { BlogButtonStyled } from "./styles/BlogButtonStyled";
import { blogPageDataTypes } from "../../types/homeTypes";
import { Divider } from "../common/styles/CommonStyled";

export default function BlogButton({ title, category }: blogPageDataTypes) {
  return (
    <>
      <BlogButtonStyled>
        <p>{title}</p>
        <p>{category}</p>
      </BlogButtonStyled>
      <Divider />
    </>
  );
}
