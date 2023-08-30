import React, { useState } from "react";
import "./info.css";

const FAQComponent = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="faq-container">
      <button className="faq-button" onClick={toggleDescription}>
        Voir plus des produits
      </button>
      <div className="faq-content">
        <div className="faq-left">
          <p className="faq-big-text">UNE RÉPONSE À TOUTES VOS QUESTIONS.</p>
          <p className="faq-link-text">Voir toutes nos réponses</p>
        </div>
        <div className="faq-right">
          <p className="faq-question" onClick={toggleDescription}>
          
            Qu'est-ce qu'un canapé convertible ?
            <span className="faq-question-icon">v</span>
          </p>
          {showDescription && (
            <p className="faq-answer">
              Un canapé convertible est un type de canapé qui peut être
              transformé en lit. Il est conçu pour offrir une solution de
              couchage supplémentaire tout en conservant la fonctionnalité d'un
              canapé traditionnel.
            </p>
          )}
          <p className="faq-question">
            Comment choisir le style de votre canapé convertible ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
