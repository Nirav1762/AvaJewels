import React from "react";

const SmartImage = ({ src, alt = '', ...props }) => {
  if (!src) return null;

  const cleanSrc = encodeURI(src.replace(/^\/+/, ''));

  // Detect production and use /AvaJewels as base path
  const basePath = process.env.NODE_ENV === 'production' ? '/AvaJewels' : '';
  const fullSrc = `${basePath}/${cleanSrc}`;

  return <img src={fullSrc} alt={alt} loading="lazy" {...props} />;
};

export default SmartImage;
