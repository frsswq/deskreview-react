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
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
