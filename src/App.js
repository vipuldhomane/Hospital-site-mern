import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Pages/Home";

import About from "./components/Pages/About";

import Blog from "./components/Pages/Blog";

import BlogDetails from "./components/Pages/BlogDetails";

import Gallery from "./components/Pages/Gallery";

import Contact from "./components/Pages/Contact";
import { useEffect } from "react";
import ErrorPage from "./components/Pages/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />

        <Route path="gallery" element={<Gallery />} />

        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
