import React from 'react';
import './guide.css';
import image from '../images/canpeeee.jpg';

const PictureComponent = () => {
  return (
    <div className="picture-container">
      <div className="overlay">
        <p className="text">Canape</p>
        <button className="button">Découvrir notre guide</button>
      </div>
      <img className="picture" src={image} alt="Canape" />
    </div>
  );
};

export default PictureComponent;
