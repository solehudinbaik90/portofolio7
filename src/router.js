import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/resume", element: <Resumes /> },
  { path: "/portfolios", element: <Portfolios /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blogs/:id/:title", element: <BlogDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Notfound /> },
]);
