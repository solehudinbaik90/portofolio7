import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import RouteErrorBoundary from "./components/RouteErrorBoundary";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <RouteErrorBoundary /> },
  { path: "/about", element: <About />, errorElement: <RouteErrorBoundary /> },
  { path: "/resume", element: <Resumes />, errorElement: <RouteErrorBoundary /> },
  { path: "/portfolios", element: <Portfolios />, errorElement: <RouteErrorBoundary /> },
  { path: "/blogs", element: <Blogs />, errorElement: <RouteErrorBoundary /> },
  { path: "/blogs/:id/:title", element: <BlogDetails />, errorElement: <RouteErrorBoundary /> },
  { path: "/contact", element: <Contact />, errorElement: <RouteErrorBoundary /> },
  { path: "*", element: <Notfound /> },
]);
