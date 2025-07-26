import React from "react";

const SmartImage = ({ src, alt = '', ...props }) => {
  if (!src) return null;

  // Clean leading slashes and encode spaces
  const cleanSrc = encodeURI(src.replace(/^\/+/, ''));

  // ✅ Use relative path instead of PUBLIC_URL
  const fullSrc = `./${cleanSrc}`;

  return <img src={fullSrc} alt={alt} loading="lazy" {...props} />;
};

export default SmartImage;