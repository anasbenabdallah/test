import React from "react";
import "./destokage.css";

const DestockageComponent = () => {
  // Replace these placeholders with actual image URLs
  const imageUrls = [
    "https://www.lamaisonconvertible.fr/cdn/shop/files/Photo_canape_convertible_Clark.jpg?v=1681983394&width=100",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/Photo_canape_convertible_pas_cher_Marlon.jpg?v=1686235523&width=100",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/Photo_maillage_du_canape_convertible_Nelly_Biblio.jpg?v=1686236090&width=100",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/Photo_maillage_du_canape_convertible_Marlon.jpg?v=1681740041&width=100",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/Photo_maillage_du_canape_convertyible_amy.jpg?v=1686295715&width=100",
  ];
  const canapeNames = [
    "Canapé Clark",
    "Canapé Marlon",
    "Canapé Nelly",
    "Canapé Marlon Deluxe",
    "Canapé Amy"
  ]
  return (
    <div>
   <div className="left-section">
  <a href="#">Accueil</a> / <a href="#">Canapé convertible</a>
</div>
 <div className="right-section">
 55 magasins en France, + 5000 meubles en stock
</div>
        <div className="destockage-container">
      <h2 className="destockage-heading">CANAPÉ CONVERTIBLE</h2>
      <div className="image-containers">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-item">
            <img  className="image"src={imageUrl} alt={`Image ${index + 1}`} />
            <p>{canapeNames[index]}</p> {/* Displaying the canapé name under the image */}
          </div>
        ))}
      </div>
    </div>
       </div>
    

  
  );
};


export default DestockageComponent;
