import React from "react";

const SmartImage = ({ src, alt = '', ...props }) => {
  if (!src) return null;

  // Ensure no leading slash and correct formatting
  const cleanSrc = src.replace(/^\/+/, '');
  const fullSrc = `${process.env.PUBLIC_URL}/${cleanSrc}`;

  return <img src={fullSrc} alt={alt} loading="lazy" {...props} />;
};

export default SmartImage;
