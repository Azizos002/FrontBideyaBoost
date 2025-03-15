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
              <strong>Duration :</strong> 3 to 5 years, depending on the degree.
            </p>
            <p>
              <strong>Courses :</strong> Pedagogy, psychology, classroom management, and specific subjects.
            </p>
            <p>
              <strong>Internships :</strong> Classroom experience to develop teaching skills.
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
              <strong>Patience and empathy : </strong>Understanding learners' needs.
            </p>
            <p>
              <strong>Good communication : </strong>Explaining clearly.
            </p>
            <p>
              <strong>Creativity : </strong>Making learning engaging.
            </p>
            <p>
              <strong>Organization : </strong>Planning lessons and managing the classroom.
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
            Different Options in Education
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
              - Primary or secondary teaching.
            </p>
            <p>
              - Specialized education (children with difficulties, specific needs).
            </p>
            <p>
              - Adult education and vocational training.
            </p>
            <p>
              - Educational counseling and school administration.
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
              - Doing an internship at a school or educational center.
            </p>
            <p>
              - Participating in educational workshops.
            </p>
            <p>
              - Talking to teachers or students in education sciences.
            </p>
            <p>
              - Evaluating your interest in teaching through career assessments.
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