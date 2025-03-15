import React from 'react';

const Parag = () => {
  return (
    <div>
      {/* Rectangle avec le paragraphe et l'image en arrière-plan */}
      <div
        style={{
          width: '1500px', // Largeur du rectangle
          height: '300px', // Hauteur du rectangle
          borderRadius: '25px', // Coins arrondis
          display: 'flex',
          justifyContent: 'center', // Centrage horizontal
          alignItems: 'center', // Centrage vertical
          margin: '60px auto', // Marge en haut et centrage horizontal
          padding: '40px', // Espace interne
          position: 'relative', // Position relative pour le conteneur
          overflow: 'hidden', // Cache les débordements de l'image floue
        }}
      >
        {/* Image en arrière-plan */}
        <div
          style={{
            backgroundImage: 'url(/im.jpg)', // Chemin de l'image
            backgroundSize: 'cover', // Couvre tout l'espace disponible
            backgroundPosition: 'center', // Centre l'image
            filter: 'blur(5px)', // Applique un flou à l'image
            position: 'absolute', // Position absolue pour superposer l'image
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Place l'image en arrière-plan
          }}
        />

        {/* Paragraphe */}
        <p
          style={{
            fontSize: '25px', // Taille du texte
            color: '#FFFFFF', // Couleur du texte
            textAlign: 'center', // Texte centré
            lineHeight: '1.6', // Espacement entre les lignes
            fontFamily: 'Georgia, serif', // Appliquer la police Georgia
            position: 'relative', // Position relative pour le texte
            zIndex: 1, // Place le texte au-dessus de l'image floue
          }}
        >
          The business field is at the heart of how companies and the economy function. It helps understand how to manage, develop, and grow an organization. This sector is ideal for those who enjoy analyzing situations, making decisions, and innovating. It offers a wide range of careers, from business management to marketing, finance, and entrepreneurship. Working in this field means tackling challenges, collaborating with different professionals, and contributing to economic growth.
        </p>
      </div>
    </div>
  );
};

export default Parag;