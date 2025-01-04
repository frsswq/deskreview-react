import { Routes, Route } from "react-router";
import GlobalStyles from "./components/common/styles/GlobalStyles.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/deskreview-react/" element={<Home />} />
        <Route path="/deskreview-react/study" element={<Blog />} />
        <Route path="/deskreview-react/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
