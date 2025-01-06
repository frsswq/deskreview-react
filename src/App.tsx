import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import GlobalStyles from "./components/common/styles/GlobalStyles.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense
        fallback={
          <div style={{ backgroundColor: "white", height: "100vh", margin: 0 }}>
            {" "}
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
