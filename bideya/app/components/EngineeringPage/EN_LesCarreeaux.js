import React from 'react';
import { IoArrowRedoOutline } from 'react-icons/io5'; // Import de l'icône

const LesCarreau = () => {
  return (
    <div>
      {/* Conteneur pour les 4 rectangles */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centrage horizontal
          gap: '100px', // Espace entre les rectangles
          marginTop: '-40px', // Marge en haut
        }}
      >
        {/* Rectangle 1 */}
        <div
          style={{
            width: '360px', // Largeur du rectangle
            height: '420px', // Hauteur du rectangle
            backgroundColor: '#DBE7FD', // Couleur de fond
            borderRadius: '12px', // Coins arrondis
            padding: '24px', // Espace interne
          }}
        >
          {/* Titre */}
          <div
            style={{
              fontSize: '24px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Education Studies
          </div>
          {/* Paragraphe */}
          <div
            style={{
              fontSize: '20px', // Taille du texte
              color: '#000000', // Couleur du texte
              textAlign: 'left', // Texte aligné à gauche
              lineHeight: '1.6', // Espacement entre les lignes
            }}
          >
            <p>
              <strong>Duration :</strong> to 5 years, depending on the specialty.
            </p>
            <p>
              <strong>Courses : </strong> Math, physics, computer science, engineering sciences, and specialized subjects.
            </p>
            <p>
              <strong>Practical Projects : </strong> Group work, design projects, and internships.
            </p>
          </div>
        </div>

        {/* Rectangle 2 */}
        <div
          style={{
            width: '360px', // Largeur du rectangle
            height: '420px', // Hauteur du rectangle
            backgroundColor: '#DBE7FD', // Couleur de fond
            borderRadius: '12px', // Coins arrondis
            padding: '24px', // Espace interne
          }}
        >
          {/* Titre */}
          <div
            style={{
              fontSize: '24px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Necessary Qualities
          </div>
          {/* Paragraphe */}
          <div
            style={{
                fontSize: '20px', // Taille du texte
                color: '#000000', // Couleur du texte
                textAlign: 'left', // Texte aligné à gauche
                lineHeight: '1.6', // Espacement entre les lignes
            }}
          >
            <p>
              <strong>Logical and Analytical</strong>
            </p>
            <p>
              <strong>Thinking : </strong>To solve complex problems.
            </p>
            <p>
              <strong>Creativity : </strong>Innovating and finding original solutions.
            </p>
            <p>
              <strong>Precision and Accuracy : </strong>Mistakes can have serious consequences.
            </p>
            <p>
              <strong>Teamwork : </strong>Collaborating effectively with other professionals.
            </p>
          </div>
        </div>

        {/* Rectangle 3 */}
        <div
          style={{
            width: '360px', // Largeur du rectangle
            height: '420px', // Hauteur du rectangle
            backgroundColor: '#DBE7FD', // Couleur de fond
            borderRadius: '12px', // Coins arrondis
            padding: '24px', // Espace interne
          }}
        >
          {/* Titre */}
          <div
            style={{
              fontSize: '24px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Different Engineering Specialties
          </div>
          {/* Paragraphe */}
          <div
            style={{
                fontSize: '20px', // Taille du texte
                color: '#000000', // Couleur du texte
                textAlign: 'left', // Texte aligné à gauche
                lineHeight: '1.6', // Espacement entre les lignes
            }}
          >
            <p>
                - Civil, mechanical, electrical, computer, chemical engineering ...
            </p>
            <p>
                - Environmental, energy, aerospace, robotics engineering ...
            </p>
            <p>
                - Systems engineering, biomedical engineering, industrial engineering ...
            </p>
          </div>
        </div>

        {/* Rectangle 4 */}
        <div
          style={{
            width: '360px', // Largeur du rectangle
            height: '420px', // Hauteur du rectangle
            backgroundColor: '#DBE7FD', // Couleur de fond
            borderRadius: '12px', // Coins arrondis
            padding: '24px', // Espace interne
          }}
        >
          {/* Titre */}
          <div
            style={{
              fontSize: '24px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Is engineering the Right Choice?
          </div>
          {/* Paragraphe */}
          <div
            style={{
                fontSize: '20px', // Taille du texte
                color: '#000000', // Couleur du texte
                textAlign: 'left', // Texte aligné à gauche
                lineHeight: '1.6', // Espacement entre les lignes
            }}
          >
            <p>
                - Do internships in technical companies
            </p>
            <p>
                - Join workshops or competitions (e.g., robotics)
            </p>
            <p>
                - Talk to engineers or students in the field
            </p>
            <p>
                - Take career tests to assess your interest in science and math
            </p>
          </div>
        </div>
      </div>
      {/* Rectangle bouton en bas à droite */}
<div
  style={{
    width: '199px', // Largeur du rectangle
    height: '57px', // Hauteur du rectangle
    backgroundColor: '#F4D5A3', // Couleur de fond
    borderRadius: '30px', // Coins arrondis
    display: 'flex',
    justifyContent: 'center', // Centrage horizontal
    alignItems: 'center', // Centrage vertical
    position: 'fixed', // Position fixe pour le placement
    bottom: '90px', // Distance depuis le bas
    right: '140px', // Distance depuis la droite
    cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Ombre légère
  }}
>
  {/* Contenu du bouton (icône + texte) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center', // Alignement vertical
              gap: '8px', // Espace entre l'icône et le texte
            }}
          >
            {/* Icône IoArrowRedoOutline */}
            <IoArrowRedoOutline style={{ fontSize: '40px', color: '#000000' }} /> {/* Taille et couleur de l'icône */}
  
            {/* Texte "Wajahni" */}
            <span
              style={{
                fontSize: '30px', // Taille du texte
                fontWeight: 'bold', // Texte en gras
                color: '#000000', // Couleur du texte (noir)
              }}
            >
              Wajahni
            </span>
          </div>
</div>
    </div>
  );
};

export default LesCarreau;