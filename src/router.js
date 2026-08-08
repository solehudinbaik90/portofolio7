import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import ErrorBoundary from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  { path: "/about", element: <About />, errorElement: <ErrorBoundary /> },
  { path: "/resume", element: <Resumes />, errorElement: <ErrorBoundary /> },
  { path: "/portfolios", element: <Portfolios />, errorElement: <ErrorBoundary /> },
  { path: "/blogs", element: <Blogs />, errorElement: <ErrorBoundary /> },
  { path: "/blogs/:id/:title", element: <BlogDetails />, errorElement: <ErrorBoundary /> },
  { path: "/contact", element: <Contact />, errorElement: <ErrorBoundary /> },
  { path: "*", element: <Notfound /> },
]);
