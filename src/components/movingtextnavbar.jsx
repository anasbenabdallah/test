import React from "react";
import "./movingtextbar.css";

const MovingTextNavbar = () => {
  return (
    <div className="moving-text-navbar">
      <marquee behavior="scroll" direction="left" scrollamount="4">
        {/* Repeat the text four times */}
        Profitez de remises jusqu'à 50% en magasin&nbsp;&nbsp;&nbsp;&nbsp;
        Profitez de remises jusqu'à 50% en magasin&nbsp;&nbsp;&nbsp;&nbsp;
        Profitez de remises jusqu'à 50% en magasin&nbsp;&nbsp;&nbsp;&nbsp;
        Profitez de remises jusqu'à 50% en magasin&nbsp;&nbsp;&nbsp;&nbsp;
        Profitez de remises jusqu'à 50% en magasin&nbsp;&nbsp;&nbsp;&nbsp;
        Profitez de remises jusqu'à 50% en magasin
      </marquee>
    </div>
  );
};

export default MovingTextNavbar;
