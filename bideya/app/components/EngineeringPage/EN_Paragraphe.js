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
            backgroundImage: 'url(/ING.jpg)', // Chemin de l'image
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
          Engineering uses science and mathematics to solve problems and create practical solutions. Engineers design products, systems, or buildings to improve our lives. This field requires logic, creativity, and teamwork.
          There are many specialties in engineering, allowing you to choose a career that matches your interests. Working in engineering means finding solutions to challenges while making a positive impact on society.
        </p>
      </div>
    </div>
  );
};

export default Parag;