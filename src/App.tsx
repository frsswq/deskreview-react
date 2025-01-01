import GlobalStyles from "./components/styles/GlobalStyles.tsx";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
