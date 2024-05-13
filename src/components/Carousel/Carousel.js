import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import Icon from "@mdi/react";
import { MemoryChevronLeft, MemoryChevronRight } from "@pictogrammers/memory";
import "./Carousel.scss";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide} className="prev">
        <Icon path={MemoryChevronLeft} size={1} />
      </button>
      <button onClick={goToNextSlide} className="next">
        <Icon path={MemoryChevronRight} size={1} />
      </button>
      <div className="carousel-items">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
