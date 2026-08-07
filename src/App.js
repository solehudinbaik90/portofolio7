import React, { useState, useEffect } from "react"; // 1. Pastikan Anda mengimpor useEffect
import * as Icon from "react-feather";
import "./App.scss";
// ... (Impor halaman lainnya tetap sama) ...
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const [lightMode, setLightMode] = useState(false);

  // 2. Bungkus manipulasi classList di dalam useEffect
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [lightMode]); // Efek ini akan berjalan setiap kali nilai lightMode berubah

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home lightMode={lightMode} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/resume",
      element: <Resumes />,
    },
    {
      path: "/portfolios",
      element: <Portfolios />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/blogs/:id/:title",
      element: <BlogDetails />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
