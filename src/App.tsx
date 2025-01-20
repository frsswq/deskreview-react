import { Routes, Route, useLocation } from "react-router";
import GlobalStyles from "./components/common/styles/GlobalStyles.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/common/Navbar.tsx";
import Footer from "./components/common/Footer.tsx";
import { createPageRoutes } from "./routes/createPageRoutes.tsx";

export default function App() {
  const mdRoutes = createPageRoutes();
  const location = useLocation();

  const is404 =
    location.pathname !== "/" && !location.pathname.startsWith("/study");

  return (
    <>
      <GlobalStyles />
      {!is404 && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <title>Deskreview | Brand and Marketing Strategy Studies</title>
              <Home />
            </>
          }
        />
        <Route path="/study">
          <Route
            index
            element={
              <>
                <title>Study | Deskreview</title>
                <Blog />
              </>
            }
          />
          {mdRoutes}
        </Route>
        <Route
          path="*"
          element={
            <>
              <title>Not Found | Deskreview</title>
              <NotFound />
            </>
          }
        />
      </Routes>
      {!is404 && <Footer />}
    </>
  );
}
