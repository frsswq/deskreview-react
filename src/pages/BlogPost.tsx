import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";
import {
  MainStyled,
  SectionContainer,
} from "../components/common/styles/CommonStyled.tsx";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

interface BlogPostProps {
  children: ReactNode;
}

export default function BlogPost({ children }: BlogPostProps) {
  return (
    <>
      <Navbar />
      <MainStyled>
        <SectionContainer>
          <MDXProvider>{children}</MDXProvider>
        </SectionContainer>
      </MainStyled>
      <Footer />
    </>
  );
}
