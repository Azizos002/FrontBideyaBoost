const Titre = () => {
  return (
    <div>

      {/* Rectangle pour le titre "Engineering" */}
    <div
      style={{
        width: '254px', // Largeur du rectangle
        height: '56px', // Hauteur du rectangle
        backgroundColor: '#F9C85D', // Couleur de fond
        borderRadius: '30px', // Coins arrondis
        display: 'flex',
        justifyContent: 'center', // Centrage horizontal
        alignItems: 'center', // Centrage vertical
        position: 'absolute', // Position absolue pour le placement
        top: '90px', // Distance depuis le haut
        left: '320px', // Distance depuis la gauche
      }}
    >
    
      {/* Titre "Engineering" */}
      <div
        style={{
          fontSize: '24px', // Taille du texte
          fontWeight: 'bold', // Texte en gras
          color: '#000000', // Couleur du texte (noir)
        }}
      >
        Engineering
      </div>
    </div>
    </div>
  );
};

export default Titre;