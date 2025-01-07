import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";
import BlogMain from "../components/blog/BlogMain.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <BlogMain />
      <Footer />
    </>
  );
}
