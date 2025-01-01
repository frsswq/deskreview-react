import GlobalStyles from "../components/common/styles/GlobalStyles.tsx";
import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";
import Main from "../components/home/Main.tsx";

function Home() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
