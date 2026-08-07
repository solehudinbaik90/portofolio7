import React, { useState, useEffect } from "react";

// Kita buat custom hook pengganti secara lokal tanpa perlu library luar
function useLocalProgressiveImage(src) {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    if (!src) return;
    
    const img = new window.Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
}

export function Image({ src, loader, ...props }) {
  // Jika gambar utama selesai dimuat, variabel ini akan berisi 'src'
  const loadedSrc = useLocalProgressiveImage(src);

  // Jika belum selesai dimuat, tampilkan gambar 'loader' (placeholder)
  return <img src={loadedSrc ? src : loader} {...props} />;
}
