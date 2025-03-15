import React from 'react';
import { FaBookOpen , FaClipboardList} from 'react-icons/fa'; // Import de l'icône
import { AiOutlineBulb } from 'react-icons/ai'; // Import de l'icône AiOutlineBulb
import { BsPcDisplay } from 'react-icons/bs'; // Import de l'icône BsPcDisplay
import { IoChatbubblesOutline } from 'react-icons/io5'; // Import de l'icône IoChatbubblesOutline
import { FaHandshake } from 'react-icons/fa'; // Import de l'icône FaHandshake
import { GiTeacher } from 'react-icons/gi'; // Import de l'icône GiTeacher


const Bande = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%', // Largeur adaptée à la page
        height: '70px', // Hauteur de la bande
        backgroundColor: '#013069', // Couleur de fond
      }}
    >
       {/* Carré blanc sur la bordure */}
       <div
        style={{
          position: 'absolute', // Position absolue pour le placer sur la bordure
          top: '-30px', // Déplace le carré vers le haut (moitié hors de la bande)
          right: '693px', // Déplace le carré vers la droite
          width: '100px', // Largeur du carré
          height: '90px', // Hauteur du carré
          backgroundColor: 'white', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
          
        }}
      ></div>
      {/* Conteneur pour les icônes en bas à gauche */}
      <div
        style={{
          position: 'absolute', // Position absolue pour le placement
          bottom: '10px', // Distance depuis le bas
          left: '180px', // Distance depuis la gauche
          display: 'flex', // Disposition en ligne
          gap: '225px', // Espace entre les icônes
          
        }}
      >
        {/* Icône GiTeacher */}
    <div
      style={{
        width: '50px', // Largeur de l'icône
        height: '50px', // Hauteur de l'icône
        color: '#F9C85D', // Couleur de l'icône
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
    }}
    >
  <GiTeacher style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
</div>
        {/* Icône FaHandshake */}
        <div
            style={{
             width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
     }}
    >
  <FaHandshake style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
</div>
        {/* Icône IoChatbubblesOutline */}
      <div
        style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
        }}
        >
        <IoChatbubblesOutline style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
      </div>
        {/* Icône BsPcDisplay */}
    <div
      style={{
        width: '50px', // Largeur de l'icône
        height: '50px', // Hauteur de l'icône
        color: '#F9C85D', // Couleur de l'icône
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
      }}
    >
  <BsPcDisplay style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
</div>
        {/* Icône FaBookOpen */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#013069', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <FaBookOpen style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>
        {/* Icône AiOutlineBulb */}
     <div
         style={{
             width: '50px', // Largeur de l'icône
             height: '50px', // Hauteur de l'icône
             color: '#F9C85D', // Couleur de l'icône
             display: 'flex',
             alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
        }}
      >
     < AiOutlineBulb style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
     </div>

        {/* Icône FaClipboardList */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <FaClipboardList style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>
      </div>
      
      

    </div>
  );
};

export default Bande;