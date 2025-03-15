import React from 'react';
import Link from 'next/link';

const LesRectangle = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(30% + 100px)', // Position sous la ligne "SUGGESTION"
        left: '50%', // Centré horizontalement
        transform: 'translateX(-50%)', // Ajustement pour un centrage parfait
        display: 'flex',
        gap: '120px', // Espace entre les rectangles
      }}
    >
      {/* Rectangle 1 - Medicine */}
      <div
        style={{
          width: '367px', // Largeur du rectangle
          height: '465px', // Hauteur du rectangle
          backgroundColor: '#AAC6FC', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          alignItems: 'center', // Centrage horizontal
          padding: '40px', // Espace interne
        }}
      >
        {/* Titre "Medicine" */}
        <div
          style={{
            fontSize: '28px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            marginBottom: '20px', // Espace sous le titre
          }}
        >
          Medicine
        </div>

        {/* Paragraphe */}
        <div
          style={{
            fontSize: '20px', // Taille du texte
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            lineHeight: '1.6', // Espacement entre les lignes
          }}
        >
          Medicine is the field focused on the prevention, diagnosis, and treatment of illnesses to improve people's health. It includes various specialties and requires a significant commitment in terms of studies and practice.
        </div>

        {/* Bouton "Explore More" pour Medicine */}
        <Link href="/Medicine" passHref>
          <div
            style={{
              width: '178px', // Largeur du bouton
              height: '80px', // Hauteur du bouton
              backgroundColor: '#F9C85D', // Couleur de fond
              borderRadius: '12px', // Coins arrondis
              display: 'flex',
              justifyContent: 'center', // Centre horizontalement
              alignItems: 'center', // Centre verticalement
              marginTop: '10px', // Marge fixe en haut pour aligner les boutons
              cursor: 'pointer', // Curseur en forme de main au survol
            }}
          >
            <div
              style={{
                fontSize: '20px', // Taille du texte
                fontWeight: 'bold', // Texte en gras
                color: '#013069', // Couleur du texte
              }}
            >
              Explore More
            </div>
          </div>
        </Link>
      </div>

      {/* Rectangle 2 - Engineering */}
      <div
        style={{
          width: '367px', // Largeur du rectangle
          height: '465px', // Hauteur du rectangle
          backgroundColor: '#AAC6FC', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          alignItems: 'center', // Centrage horizontal
          padding: '40px', // Espace interne
        }}
      >
        {/* Titre "Engineering" */}
        <div
          style={{
            fontSize: '28px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            marginBottom: '20px', // Espace sous le titre
          }}
        >
          Engineering
        </div>

        {/* Paragraphe */}
        <div
          style={{
            fontSize: '20px', // Taille du texte
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            lineHeight: '1.6', // Espacement entre les lignes
          }}
        >
          Engineering students need strong math, physics, and problem-solving skills. Hands-on experience, creativity, and teamwork are key. Stay curious, apply concepts practically, and keep up with new technologies.
        </div>

        {/* Bouton "Explore More" pour Engineering */}
        <Link href="/Engineering" passHref>
          <div
            style={{
              width: '178px', // Largeur du bouton
              height: '80px', // Hauteur du bouton
              backgroundColor: '#F9C85D', // Couleur de fond
              borderRadius: '12px', // Coins arrondis
              display: 'flex',
              justifyContent: 'center', // Centre horizontalement
              alignItems: 'center', // Centre verticalement
              marginTop: '42px', // Marge fixe en haut pour aligner les boutons
              cursor: 'pointer', // Curseur en forme de main au survol
            }}
          >
            <div
              style={{
                fontSize: '20px', // Taille du texte
                fontWeight: 'bold', // Texte en gras
                color: '#013069', // Couleur du texte
              }}
            >
              Explore More
            </div>
          </div>
        </Link>
      </div>

      {/* Rectangle 3 - Business */}
      <div
        style={{
          width: '367px', // Largeur du rectangle
          height: '465px', // Hauteur du rectangle
          backgroundColor: '#AAC6FC', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          alignItems: 'center', // Centrage horizontal
          padding: '40px', // Espace interne
        }}
      >
        {/* Titre "Business" */}
        <div
          style={{
            fontSize: '28px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            marginBottom: '20px', // Espace sous le titre
          }}
        >
          Business
        </div>

        {/* Paragraphe */}
        <div
          style={{
            fontSize: '20px', // Taille du texte
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            lineHeight: '1.6', // Espacement entre les lignes
          }}
        >
          Business is the art of creating, managing, and developing a venture to sell products or services and make money, while understanding the market and making strategic decisions.
        </div>

        {/* Bouton "Explore More" pour Business */}
        <Link href="/Business" passHref>
  <div
    style={{
      width: '178px', // Largeur du bouton
      height: '80px', // Hauteur du bouton
      backgroundColor: '#F9C85D', // Couleur de fond
      borderRadius: '12px', // Coins arrondis
      display: 'flex',
      justifyContent: 'center', // Centre horizontalement
      alignItems: 'center', // Centre verticalement
      marginTop: '75px', // Marge fixe en haut pour aligner les boutons
      cursor: 'pointer', // Curseur en forme de main au survol
    }}
  >
    <div
      style={{
        fontSize: '20px', // Taille du texte
        fontWeight: 'bold', // Texte en gras
        color: '#013069', // Couleur du texte
      }}
    >
      Explore More
    </div>
  </div>
</Link>
      </div>

      {/* Rectangle 4 - Education */}
      <div
        style={{
          width: '367px', // Largeur du rectangle
          height: '465px', // Hauteur du rectangle
          backgroundColor: '#AAC6FC', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          alignItems: 'center', // Centrage horizontal
          padding: '40px', // Espace interne
        }}
      >
        {/* Titre "Education" */}
        <div
          style={{
            fontSize: '28px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            marginBottom: '20px', // Espace sous le titre
          }}
        >
          Education
        </div>

        {/* Paragraphe */}
        <div
          style={{
            fontSize: '20px', // Taille du texte
            color: '#013069', // Couleur du texte
            textAlign: 'center', // Texte centré
            lineHeight: '1.6', // Espacement entre les lignes
          }}
        >
          Education is the key that opens the doors to the future, providing everyone with knowledge, skills, and the ability to adapt to the challenges of the modern world, ensuring success both personally and professionally.
        </div>

        {/* Bouton "Explore More" pour Education */}
        <Link href="/Education" passHref>
          <div
            style={{
              width: '178px', // Largeur du bouton
              height: '80px', // Hauteur du bouton
              backgroundColor: '#F9C85D', // Couleur de fond
              borderRadius: '12px', // Coins arrondis
              display: 'flex',
              justifyContent: 'center', // Centre horizontalement
              alignItems: 'center', // Centre verticalement
              marginTop: '12px', // Marge fixe en haut pour aligner les boutons
              cursor: 'pointer', // Curseur en forme de main au survol
            }}
          >
            <div
              style={{
                fontSize: '20px', // Taille du texte
                fontWeight: 'bold', // Texte en gras
                color: '#013069', // Couleur du texte
              }}
            >
              Explore More
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LesRectangle;