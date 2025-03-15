import React from 'react';

const BRech = () => {
  return (
    <>
      {/* Barre de recherche */}
      <div
        style={{
          position: 'absolute',
          top: '12%', // Même niveau que le rectangle "GUIDE"
          left: 'calc(20% + 350px)', // Position à droite du rectangle "GUIDE"
          width: '1000px', // Largeur de la barre de recherche
          height: '58px', // Hauteur de la barre de recherche
          backgroundColor: 'white', // Fond blanc
          border: '2px solid #013069', // Bordure de couleur #013069
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px', // Espace interne pour le texte
        }}
      >
        <input
          type="text"
          placeholder="Search for the field desired"
          style={{
            width: '100%', // Prend toute la largeur disponible
            border: 'none', // Pas de bordure
            outline: 'none', // Pas de contour lors du focus
            fontSize: '24px', // Taille du texte
            backgroundColor: 'transparent', // Fond transparent
          }}
        />
      </div>

      {/* Phrase centrée sous la barre de recherche */}
      <div
        style={{
          position: 'absolute',
          top: 'calc(10% + 100px)', // Position sous la barre de recherche et le rectangle
          left: '50%', // Centré horizontalement
          transform: 'translateX(-50%)', // Ajustement pour un centrage parfait
          width: '80%', // Largeur du conteneur de la phrase
          maxWidth: '800px', // Largeur maximale pour une meilleure lisibilité
          textAlign: 'center', // Texte centré
          fontSize: '24px', // Taille du texte
          color: '#837F7F', // Couleur du texte
          fontFamily: '"Georgia", serif', // Police élégante
          letterSpacing: '1px', // Espacement entre les lettres
          lineHeight: '1.3', // Espacement entre les lignes
        }}
      >
        Welcome to our guide! Here, you'll find everything you need to get started and master the essentials. With step-by-step instructions and useful tips, we make it easy for you to learn and apply new skills. Let's dive in!
      </div>

      {/* Ligne droite avec "SUGGESTION" au centre */}
      <div
        style={{
          position: 'absolute',
          top: '36%', // Centré verticalement
          left: '50%', // Centré horizontalement
          transform: 'translate(-50%, -50%)', // Ajustement pour un centrage parfait
          width: '80%', // Largeur de la ligne
          maxWidth: '800px', // Largeur maximale
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Ligne gauche */}
        <div
          style={{
            flex: 1,
            height: '1px', // Épaisseur de la ligne
            backgroundColor: '#013069', // Couleur de la ligne
          }}
        ></div>

        {/* Texte "SUGGESTION" */}
        <div
          style={{
            margin: '0 20px', // Espace entre la ligne et le texte
            fontSize: '20px', // Taille du texte
            color: '#013069', // Couleur du texte
            fontWeight: 'bold', // Texte en gras
          }}
        >
          SUGGESTION
        </div>

        {/* Ligne droite */}
        <div
          style={{
            flex: 1,
            height: '1px', // Épaisseur de la ligne
            backgroundColor: '#013069', // Couleur de la ligne
          }}
        ></div>
      </div>
    </>
  );
};

export default BRech;