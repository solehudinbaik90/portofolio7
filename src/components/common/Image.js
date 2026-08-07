import React, { useEffect, useState } from "react";

export function Image({ src, loader, alt = "", ...props }) {
  const [imgSrc, setImgSrc] = useState(loader || src);

  useEffect(() => {
    if (!src) return;
    let isMounted = true;
    const img = new window.Image();
    img.src = src;
    img.onload = () => isMounted && setImgSrc(src);
    img.onerror = () => isMounted && setImgSrc(loader);
    return () => {
      isMounted = false;
    };
  }, [src, loader]);

  return <img src={imgSrc} alt={alt} {...props} />;
}
