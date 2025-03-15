import React from 'react';

const Rguide = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10%', // Centré verticalement
        left: '10%', // Centré horizontalement
        width: '326px', // Largeur du rectangle
        height: '75px', // Hauteur du rectangle
        backgroundColor: '#F9BE01', // Couleur de fond
        borderRadius: '20px', // Coins arrondis
        display: 'flex',
        justifyContent: 'center', // Centre horizontalement
        alignItems: 'center', // Centre verticalement
      }}
    >
      {/* Texte "Guide" */}
      <div
        style={{
          color: 'black', // Couleur du texte
          fontSize: '40px', // Taille du texte
          fontWeight: 'normal', // Texte en gras
          width: '161px', // Largeur du texte
          height: '56px', // Hauteur du texte
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
        }}
      >
        Guide
      </div>
    </div>
  );
};

export default Rguide;