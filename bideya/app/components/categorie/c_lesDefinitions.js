import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io"; // Importe l'icône

const C_LesDéfinitions = () => {
  return (
    <div
      style={{
        display: 'flex', // Disposition en ligne
        justifyContent: 'center', // Centre les rectangles horizontalement
        gap: '60px', // Espacement entre les rectangles
        position: 'absolute', // Position absolue pour les placer en bas de la page
        bottom: '50px', // Distance entre les rectangles et le bas de la page
        left: '50%', // Centrer les rectangles horizontalement
        transform: 'translateX(-50%)', // Ajuste pour centrer précisément
      }}
    >
      {/* Rectangle 1 - Couleur FBCE01 */}
      <div
        style={{
          width: '300px', // Largeur du rectangle
          height: '350px', // Hauteur du rectangle
          backgroundColor: '#FBCE01', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          position: 'relative', // Permet de positionner l'icône à l'intérieur
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          justifyContent: 'center', // Centre le contenu verticalement
          alignItems: 'center', // Centre le contenu horizontalement
        }}
      >
        {/* Icône de fermeture en haut à droite */}
        <div
          style={{
            position: 'absolute', // Position absolue pour l'icône
            top: '10px', // Positionnement du haut
            right: '10px', // Positionnement de droite
            color: '#2F40C4', // Couleur de l'icône
            fontSize: '45px', // Taille de l'icône
            cursor: 'pointer', // Curseur en forme de main
          }}
        >
          <IoIosCloseCircleOutline />
        </div>

        {/* Paragraphe */}
        <div
          style={{
            width: '243px', // Largeur du paragraphe
            height: '270px', // Hauteur du paragraphe
            color: '#000000', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontFamily: 'Arial, sans-serif', // Police du texte
            textAlign: 'center', // Alignement du texte au centre
            overflowY: 'auto', // Permet le défilement du texte si trop long
            whiteSpace: 'pre-line', // Gère les sauts de ligne
            lineHeight: '1.5', // Espacement entre les lignes du texte
            padding: '10px', // Marge intérieure du texte
          }}
        >
          Explore physics, chemistry, and biology while diving into AI, robotics, and space tech.{"\n\n"}
          Try experiments, coding, and projects to boost problem-solving and innovation! 🚀
        </div>
      </div>

      {/* Rectangle 2 - Couleur AAC6FC */}
      <div
        style={{
          width: '300px', // Largeur du rectangle
          height: '350px', // Hauteur du rectangle
          backgroundColor: '#AAC6FC', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          position: 'relative', // Permet de positionner l'icône à l'intérieur
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          justifyContent: 'center', // Centre le contenu verticalement
          alignItems: 'center', // Centre le contenu horizontalement
        }}
      >
        {/* Icône de fermeture en haut à droite */}
        <div
          style={{
            position: 'absolute', // Position absolue pour l'icône
            top: '10px', // Positionnement du haut
            right: '10px', // Positionnement de droite
            color: '#2F40C4', // Couleur de l'icône
            fontSize: '45px', // Taille de l'icône
            cursor: 'pointer', // Curseur en forme de main
          }}
        >
          <IoIosCloseCircleOutline />
        </div>

        {/* Paragraphe */}
        <div
          style={{
            width: '243px', // Largeur du paragraphe
            height: '270px', // Hauteur du paragraphe
            color: '#000000', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontFamily: 'Arial, sans-serif', // Police du texte
            textAlign: 'center', // Alignement du texte au centre
            overflowY: 'auto', // Permet le défilement du texte si trop long
            whiteSpace: 'pre-line', // Gère les sauts de ligne
            lineHeight: '1.5', // Espacement entre les lignes du texte
            padding: '10px', // Marge intérieure du texte
          }}
        >
          Boost fitness, teamwork, and discipline through various sports, athletics, and motor skill exercises.{"\n\n"}
          Participate in challenges, improve coordination, and stay active for a healthier lifestyle! 💪🔥
        </div>
      </div>

      {/* Rectangle 3 - Couleur EFBED3 */}
      <div
        style={{
          width: '300px', // Largeur du rectangle
          height: '350px', // Hauteur du rectangle
          backgroundColor: '#EFBED3', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          position: 'relative', // Permet de positionner l'icône à l'intérieur
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          justifyContent: 'center', // Centre le contenu verticalement
          alignItems: 'center', // Centre le contenu horizontalement
        }}
      >
        {/* Icône de fermeture en haut à droite */}
        <div
          style={{
            position: 'absolute', // Position absolue pour l'icône
            top: '10px', // Positionnement du haut
            right: '10px', // Positionnement de droite
            color: '#2F40C4', // Couleur de l'icône
            fontSize: '45px', // Taille de l'icône
            cursor: 'pointer', // Curseur en forme de main
          }}
        >
          <IoIosCloseCircleOutline />
        </div>

        {/* Paragraphe */}
        <div
          style={{
            width: '243px', // Largeur du paragraphe
            height: '270px', // Hauteur du paragraphe
            color: '#000000', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontFamily: 'Arial, sans-serif', // Police du texte
            textAlign: 'center', // Alignement du texte au centre
            overflowY: 'auto', // Permet le défilement du texte si trop long
            whiteSpace: 'pre-line', // Gère les sauts de ligne
            lineHeight: '1.5', // Espacement entre les lignes du texte
            padding: '10px', // Marge intérieure du texte
          }}
        >
          Unleash your imagination through painting, music,{"\n"}
          writing, and design.{"\n\n"}
          Explore creative expression, develop new skills, and bring ideas to life with hands-on projects! 🎭🎶
        </div>
      </div>

      {/* Rectangle 4 - Couleur 7FD7C2 */}
      <div
        style={{
          width: '300px', // Largeur du rectangle
          height: '350px', // Hauteur du rectangle
          backgroundColor: '#7FD7C2', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          position: 'relative', // Permet de positionner l'icône à l'intérieur
          display: 'flex',
          flexDirection: 'column', // Alignement vertical
          justifyContent: 'center', // Centre le contenu verticalement
          alignItems: 'center', // Centre le contenu horizontalement
        }}
      >
        {/* Icône de fermeture en haut à droite */}
        <div
          style={{
            position: 'absolute', // Position absolue pour l'icône
            top: '10px', // Positionnement du haut
            right: '10px', // Positionnement de droite
            color: '#2F40C4', // Couleur de l'icône
            fontSize: '45px', // Taille de l'icône
            cursor: 'pointer', // Curseur en forme de main
          }}
        >
          <IoIosCloseCircleOutline />
        </div>

        {/* Paragraphe */}
        <div
          style={{
            width: '243px', // Largeur du paragraphe
            height: '270px', // Hauteur du paragraphe
            color: '#000000', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontFamily: 'Arial, sans-serif', // Police du texte
            textAlign: 'center', // Alignement du texte au centre
            overflowY: 'auto', // Permet le défilement du texte si trop long
            whiteSpace: 'pre-line', // Gère les sauts de ligne
            lineHeight: '1.5', // Espacement entre les lignes du texte
            padding: '10px', // Marge intérieure du texte
          }}
        >
          Learn budgeting, saving, and smart investing to manage money wisely.{"\n\n"}
          Explore financial literacy, stock market basics, and economic principles to build a secure future! 💳🚀
        </div>
      </div>
    </div>
  );
};

export default C_LesDéfinitions;
