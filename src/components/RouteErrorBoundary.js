import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function RouteErrorBoundary() {
  const error = useRouteError();
  console.error("Route error:", error);

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error?.message || "Terjadi kesalahan yang tidak diketahui.";

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Terjadi kesalahan saat menampilkan konten ini.</h3>
      <p style={{ opacity: 0.7 }}>{message}</p>
      <button onClick={() => window.location.reload()} className="mi-button">
        Muat Ulang Halaman
      </button>
    </div>
  );
}

export default RouteErrorBoundary;
