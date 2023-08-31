import React, { useState } from "react";
import "./imageslider.css";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ImageSlider = ({ productData }) => {
  const images = [
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20tissu_20Preston_20Bleu_20Fonc_C3_A9_201.jpg?format=webp&v=1693321829&width=1024",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20ouvert_20tissu_20Preston_20Bleu_20Fonc_C3_A9.jpg?format=webp&v=1693321822&width=1024",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20tissu_20Preston_20Bleu_20Fonc_C3_A9_203.jpg?format=webp&v=1693321826&width=1024",
    // Add more image URLs
  ];

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
  src={isHovered ? images[currentIndex + 1] : images[currentIndex]}
  alt={`Image ${currentIndex}`}
  className="image"
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
