import React, { useState } from "react";
import "./imageslider.css";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ImageSlider = ({ images, productData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = productData[0];

  return (
    <div className="image-slider">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className={isHovered ? "hovered" : ""}
        />
        <div className="arrow-buttons">
          <IconButton onClick={prevSlide} className="arrow-button prev-button">
            <ArrowBack />
          </IconButton>
          <IconButton onClick={nextSlide} className="arrow-button next-button">
            <ArrowForward />
          </IconButton>
        </div>
      </div>
      <div className="product-info">
        <p className="product-price">{currentProduct.price}</p>
        <p className="product-description">{currentProduct.description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
