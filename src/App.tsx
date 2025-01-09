import { Routes, Route } from "react-router";
import GlobalStyles from "./components/common/styles/GlobalStyles.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";
import { createPageRoutes } from "./utils/createPageRoutes.tsx";

export default function App() {
  const mdRoutes = createPageRoutes();

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          {mdRoutes}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
