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
              fontSize: '23px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Medical studies
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
              <strong>Duration:</strong> Between 7 and 12 years, depending on the chosen specialty.
            </p>
            <p>
              <strong>Workload:</strong> A lot of theoretical courses, exams, and practical internships.
            </p>
            <p>
              <strong>Continuous learning:</strong> Even after graduation, ongoing education is required.
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
              fontSize: '23px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Qualities to Become a Doctor
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
              <strong>Patience:</strong> Studies are long and tough (7 to 12 years)
            </p>
            <p>
              <strong>Empathy:</strong> Understanding patients is key.
            </p>
            <p>
              <strong>Discipline:</strong> Mistakes have serious consequences.
            </p>
            <p>
              <strong>Stress resistance:</strong> Handle urgent situations.
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
              fontSize: '23px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Different Careers in Medicine
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
              <strong>General medicine:</strong> Basic healthcare.
            </p>
            <p>
              <strong>Medical specialties:</strong> Cardiology (heart), pediatrics (children), dermatology (skin), surgery, etc.
            </p>
            <p>
              <strong>Related careers:</strong> Pharmacy, dentistry, veterinary medicine, medical research.
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
              fontSize: '23px', // Taille du texte
              fontWeight: 'bold', // Texte en gras
              color: '#000000', // Couleur du texte (noir)
              textAlign: 'center', // Texte centré
              marginBottom: '16px', // Espace sous le titre
            }}
          >
            Is a Career in Medicine Right for You?
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
              - Do an observation internship at the hospital
            </p>
            <p>
              - Talk to medical students or healthcare professionals
            </p>
            <p>
              - Attend health-related events
            </p>
            <p>
              - Take career tests to see if medicine fits your skills and interests
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
          <IoArrowRedoOutline style={{ fontSize: '35px', color: '#000000' }} /> {/* Taille et couleur de l'icône */}

          {/* Texte "Wajahni" */}
          <span
            style={{
              fontSize: '25px', // Taille du texte
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