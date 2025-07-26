const SmartImage = ({ src, alt, ...props }) => {
    return <img src={`${process.env.PUBLIC_URL}/assets/Images/${src}`} alt={alt} {...props} />;
  };
  export default SmartImage;