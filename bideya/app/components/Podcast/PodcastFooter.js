import React from 'react';
import { FaBookOpen, FaClipboardList } from 'react-icons/fa'; // Import de l'icône
import { AiOutlineBulb } from 'react-icons/ai'; // Import de l'icône AiOutlineBulb
import { BsPcDisplay } from 'react-icons/bs'; // Import de l'icône BsPcDisplay
import { IoChatbubblesOutline } from 'react-icons/io5'; // Import de l'icône IoChatbubblesOutline
import { FaHandshake } from 'react-icons/fa'; // Import de l'icône FaHandshake
import { GiTeacher } from 'react-icons/gi'; // Import de l'icône GiTeacher

const PodcastFooter = () => {
  return (
    <footer
      style={{  
        width: '100%', // Full width of the screen
        height: '70px', // Height of the footer
        backgroundColor: '#013069', // Background color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center content horizontally
        marginTop: '40px', // Space between content and footer
        boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      {/* Conteneur pour les icônes */}
      <div
        style={{
          display: 'flex', // Disposition en ligne
          gap: '170px', // Espace entre les icônes
          maxWidth: '100%', // Ensure the container does not exceed the screen width
          padding: '0 20px', // Add padding to prevent icons from touching the edges
          boxSizing: 'border-box', // Ensure padding is included in the width
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
            color: '#F9C85D', // Couleur de l'icône
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
          <AiOutlineBulb style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
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
    </footer>
  );
};

export default PodcastFooter;