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
            width: '350px', // Largeur du rectangle
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
            Business Studies
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
              <strong>Duration :</strong> 3 to 5 years, depending on the degree.
            </p>
            <p>
              <strong>Courses :</strong> Management, finance, marketing, entrepreneurship, economics.
            </p>
            <p>
              <strong>Practical Work: </strong> Case studies, group projects, internships.
            </p>
          </div>
        </div>

        {/* Rectangle 2 */}
        <div
          style={{
            width: '350px', // Largeur du rectangle
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
              <strong>Analysis : </strong>Understanding markets, decision-making.
            </p>
            <p>
              <strong>Leadership :  </strong>Teamwork, negotiation, management.
            </p>
            <p>
              <strong>Creativity & Innovation : </strong>New ideas, adapting to trends.
            </p>
            <p>
              <strong>Organization & Precision : </strong>Managing budgets, strategies.
            </p>
          </div>
        </div>

        {/* Rectangle 3 */}
        <div
          style={{
            width: '350px', // Largeur du rectangle
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
              - Marketing & Communication
            </p>
            <p>
              - Finance & Accounting 
            </p>
            <p>
              - Commerce & Management
            </p>
            <p>
              - Economics & Strategy 
            </p>
            <p>
              - E-commerce & Digital Business 
            </p>
            <p>
              - International Business 
            </p>
          </div>
        </div>

        {/* Rectangle 4 */}
        <div
          style={{
            width: '350px', // Largeur du rectangle
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
            Is Education the Right Choice?
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
              - Gain experience through internships or student jobs.
            </p>
            <p>
              - Join business competitions or clubs.
            </p>
            <p>
              - Talk to students and professionals.
            </p>
            <p>
              - Explore online courses or personal projects.
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