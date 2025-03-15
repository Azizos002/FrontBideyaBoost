import React from 'react';
import { LuArrowUpDown } from "react-icons/lu"; // Importe l'icône


const CategoriesTitle = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le titre
          top: '100px', // En haut
          left: '90px', // À gauche
          width: '178px', // Largeur du titre
          height: '54px', // Hauteur du titre
          display: 'flex',
          alignItems: 'center', // Centre le texte verticalement
          justifyContent: 'center', // Centre le texte horizontalement
          backgroundColor: 'transparent', // Fond transparent
          color: '#000000', // Couleur du texte (noir)
          fontSize: '40px', // Taille du texte
          fontWeight: 'bold', // Texte en gras
          fontFamily: 'Arial, sans-serif', // Police de caractères
        }}
      >
        Categories
      </div>
      <div
      style={{
        position: 'absolute', // Position absolue pour placer le rectangle
        top: '100px', // En haut
        right: '90px', // À droite
        width: '170px', // Largeur du rectangle
        height: '47px', // Hauteur du rectangle
        backgroundColor: '#2F40C4', // Couleur de fond
        borderRadius: '12px', // Coins arrondis
        display: 'flex',
        alignItems: 'center', // Centre le contenu verticalement
        justifyContent: 'center', // Centre le contenu horizontalement
        color: '#FFFFFF', // Couleur du texte (blanc)
        fontSize: '25px', // Taille du texte
        fontWeight: 'normal', // Texte en gras
        fontFamily: 'Arial, sans-serif', // Police de caractères
        gap: '8px', // Espace entre l'icône et le texte
      }}
    >
      {/* Icône LuArrowUpDown */}
      <LuArrowUpDown />

      {/* Texte "Sort By" */}
      <span>Sort By</span>
    </div>
    </div>
  );
};

export default CategoriesTitle;