import React from "react";
import "./Image.scss";

const Image = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" />
    </div>
  );
};

export default Image;
