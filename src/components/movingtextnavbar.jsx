import React from "react";
import "./movingtextbar.css";

const MovingTextNavbar = () => {
  return (
    <div className="moving-text-navbar">
      <marquee behavior="scroll" direction="left" scrollamount="30">
        {/*scroll amount control how fast the text will move */}
        {/* Repeat the text four times */}
        
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO&nbsp;&nbsp;&nbsp;&nbsp;
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO&nbsp;&nbsp;&nbsp;&nbsp;
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO&nbsp;&nbsp;&nbsp;&nbsp;
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO&nbsp;&nbsp;&nbsp;&nbsp;
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO&nbsp;&nbsp;&nbsp;&nbsp;
PROFITEZ DE REMISES -25% SUR LES CANAPÉS CONVERTIBLES ET BANQUETTES EN MAGASIN, PAR TEL. ET SUR LE SITE PRO

      </marquee>
    </div>
  );
};

export default MovingTextNavbar;
