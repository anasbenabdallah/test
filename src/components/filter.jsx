import React, { useState } from "react";
import "./filter.css"; // Create a CSS file for styling
import TuneSharpIcon from "@mui/icons-material/TuneSharp";

const FilterButton = () => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="filter-button-container">
      <button className="filter-button" onClick={togglePanel}>
        <TuneSharpIcon /> Filter
      </button>
      <div className={`filter-panel-container ${showPanel ? "show-filter-panel" : ""}`}>
        <div className={`filter-panel ${showPanel ? "active" : ""}`}>
          <h3>Filtres</h3>
          <div className="filter-option">
            <button>Trier par :</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>Meilleures ventes</p>
              <p>Prix: faibkes a élevé</p>
              
          </div>
          </div>
          <div className="filter-option">
            <button>Prix</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>De</p>
              <p>A</p>
            
          </div>
          </div>
          <div className="filter-option">
            <button>Disponibilité</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>En Stock,livré des 48h</p>
              <p>Sur demande</p>
             
            </div>
          </div>
          <div className="filter-option">
            <button>Déhoussable</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>100% déhoussable</p>
              <p>Non déhoussable</p>
              <p>Partiellement déhoussable</p>
              
          </div>
          {/* Add more filter options here */}
        </div>
        <div className="filter-option">
            <button>Type de couchage</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>Couchage quotidien</p>
              <p>Couchage régulier</p>
              <p>Pas de couchage</p>
              
          </div>
          </div>
          <div className="filter-option">
            <button>Style</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>Classique</p>
              <p>Design</p>
              <p>Scandinave</p>
              <p>Vintage</p>
          </div>
      </div>
      <div className="filter-option">
            <button>Couleur</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>Beige</p>
              <p>Blanc</p>
              <p>Gris</p>
              <p>Jaune</p>
          </div>
          </div>
          <div className="filter-option">
            <button>Épaisseur matelas</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>tres épais</p>
             
          </div>
          </div>
          <div className="filter-option">
            <button>Revêtement</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>tres épais</p>
             </div>
          </div>
          <div className="filter-option">
            <button>Largeur</button>
            <span className="filter-dropdown">▼</span>
            <div className="filter-dropdown-content">
              <p>tres épais</p>
             </div>
          </div>
          <button className="faq-button"> Reintiliaser</button>
          <button className="faq-button"> Voir la selection</button>

      </div>
    </div>
    </div>
  );
};

export default FilterButton;
