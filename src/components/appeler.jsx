import React from "react";
import "./appeler.css";
import people from "../images/people.webp";
import canape from "../images/canape.webp";

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={people} alt="People" className="people-image" />
      </div>
      <div className="contact-right">
        <p className="contact-text">
          UNE QUESTION, <br />
          UN CONSEIL ?
        </p>
        <p className="contact-description">
          Notre équipe d'experts en ameublement se tient à votre disposition par téléphone, chat, visio ou en magasins pour vous aider à aménager une maison plus intelligente.
        </p>
        <div className="rounded-image-container">
          <img src={canape} alt="Canape" className="canape-image" />
        </div>
        <div className="button-container">
          <button className="contact-button hover-rose">NOUS RAPPELER</button>
          <button className="contact-button">NOUS ÉCRIRE</button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
