import React from "react";

const CarouselItem = ({ item, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img src={item.imageUrl} alt={item.altText} />
      <div className="caption">{item.caption}</div>
    </div>
  );
};

export default CarouselItem;
