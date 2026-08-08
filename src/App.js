import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LightModeContext } from "./context/LightModeContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  return (
    <LightModeContext.Provider value={lightMode}>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          type="button"
          aria-label="Ganti mode terang/gelap"
          className={lightMode ? "light-mode-switch active" : "light-mode-switch"}
          onClick={() => setLightMode((v) => !v)}
        />
      </div>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </LightModeContext.Provider>
  );
}

export default App;
