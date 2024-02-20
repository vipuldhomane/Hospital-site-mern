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
import Blog1 from "./components/Pages/Blog1";
import Blog2 from "./components/Pages/Blog2";
import Blog3 from "./components/Pages/Blog3";
import Blog4 from "./components/Pages/Blog4";
import Blog5 from "./components/Pages/Blog5";
import Blog6 from "./components/Pages/Blog6";
import PricingPlan from "./components/Pages/PricingPlan";

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

        <Route path="blog/blog1" element={<Blog1 />} />
        <Route path="blog/blog2" element={<Blog2 />} />
        <Route path="blog/blog3" element={<Blog3 />} />
        <Route path="blog/blog4" element={<Blog4 />} />
        <Route path="blog/blog5" element={<Blog5 />} />
        <Route path="blog/blog6" element={<Blog6 />} />
        <Route path="plans" element={<PricingPlan />} />

        <Route path="blog/:blogId" element={<BlogDetails />} />

        <Route path="gallery" element={<Gallery />} />

        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
