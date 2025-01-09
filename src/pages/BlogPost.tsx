import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";
import {
  MainStyled,
  SectionContainer,
} from "../components/common/styles/CommonStyled.tsx";
import { ReactNode } from "react";
import { format } from "date-fns";

interface BlogPostProps {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    tags?: string[];
    category?: string;
    author?: string;
  };
  children: ReactNode;
}

export default function BlogPost({ frontmatter, children }: BlogPostProps) {
  const formattedDate = frontmatter.date
    ? format(new Date(frontmatter.date), "dd/MM/yyyy")
    : null;

  return (
    <>
      <Navbar />
      <MainStyled>
        <SectionContainer>
          {frontmatter.title && <h1>{frontmatter.title}</h1>}
          {formattedDate && <p>Published on: {formattedDate}</p>}
          {children}
        </SectionContainer>
      </MainStyled>
      <Footer />
    </>
  );
}
