import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
