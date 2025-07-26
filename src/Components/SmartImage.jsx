import React from "react";

const SmartImage = ({ src, alt = '', ...props }) => {
  if (!src) return null;

  // Remove any leading slashes and encode URI
  const cleanSrc = encodeURI(src.replace(/^\/+/, ''));
  const fullSrc = `${process.env.PUBLIC_URL}/${cleanSrc}`;

  return <img src={fullSrc} alt={alt} loading="lazy" {...props} />;
};

export default SmartImage;
