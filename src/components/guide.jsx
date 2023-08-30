import React from 'react';
import './guide.css'; // You can create a CSS file for styling
import image from '../images/canpeeee.jpg';

const PictureComponent = () => {
  return (
    <div className="picture-container">
      <img className="picture" src={image} alt="Canape" />
      <div className="overlay">
        <p className="text">Canape</p>
        <button className="button">Découvrir notre guide</button>
      </div>
    </div>
  );
};

export default PictureComponent;
