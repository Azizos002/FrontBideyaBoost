import React from 'react';

const FourRectanglesWithTitles = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        gap: '20px',
      }}
    >
      {/* Conteneur principal pour les rectangles et le rectangle vertical */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {/* Rectangle vertical "Categories" */}
        <div
          style={{
            width: '75px',
            height: '497px',
            backgroundColor: '#F9BE01',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative', // Pour positionner le texte verticalement
          }}
        >
          {/* Texte "Categories" en vertical */}
          <div
            style={{
              color: 'black',
              fontSize: '30px',
              fontWeight: 'bold',
              transform: 'rotate(-90deg)', // Rotation du texte
              whiteSpace: 'nowrap', // Empêche le texte de se diviser
            }}
          >
            Categories
          </div>
        </div>

        {/* Premier groupe de rectangles (rectangles 1 et 3) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Premier rectangle avec image à gauche et texte à droite */}
          <div
            style={{
              width: '580px',
              height: '231px',
              backgroundColor: '#AAC6FC',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            {/* Cadre blanc pour l'image à gauche */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '10px', // Coins arrondis
                border: '4px solid white', // Cadre blanc épais
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden', // Pour cacher les bords de l'image
                marginRight: '20px', // Espacement entre l'image et le texte
              }}
            >
              {/* Image à gauche */}
              <img
                src="/Sport.png" // Chemin de l'image dans le dossier public
                alt="Sport"
                style={{
                  width: '100%', // L'image remplit le cadre
                  height: '100%',
                  objectFit: 'cover', // Ajuste l'image pour couvrir le cadre
                }}
              />
            </div>

            {/* Contenu à droite (titre + paragraphe) */}
            <div
              style={{
                flex: 1, // Prend l'espace disponible
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Titre "Sports" */}
              <h3
                style={{
                  color: 'black',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 20px 0', // Espacement sous le titre
                }}
              >
                Sports
              </h3>

              {/* Paragraphe */}
              <p style={{ color: '#013069', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
                Free sports education. This is the first step towards a career in sports writing. You have to be well acquainted with the rules.
              </p>
            </div>
          </div>

          {/* Troisième rectangle avec image à gauche et texte à droite */}
          <div
            style={{
              width: '580px',
              height: '231px',
              backgroundColor: '#FBCE01',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            {/* Cadre blanc pour l'image à gauche */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '10px',
                border: '4px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              {/* Image à gauche */}
              <img
                src="/medecin.png" // Chemin de l'image dans le dossier public
                alt="Science"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Contenu à droite (titre + paragraphe) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Titre "Science" */}
              <h3
                style={{
                  color: 'black',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 20px 0',
                }}
              >
                Science
              </h3>

              {/* Paragraphe */}
              <p style={{ color: '#013069', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
                Dive into science education to explore innovative ideas and enhance your knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Deuxième groupe de rectangles (rectangles 2 et 4) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Deuxième rectangle avec image à gauche et texte à droite */}
          <div
            style={{
              width: '580px',
              height: '231px',
              backgroundColor: '#7FD7C2',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            {/* Cadre blanc pour l'image à gauche */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '10px',
                border: '4px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              {/* Image à gauche */}
              <img
                src="/Finance.png" // Chemin de l'image dans le dossier public
                alt="Finance"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Contenu à droite (titre + paragraphe) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Titre "Finance" */}
              <h3
                style={{
                  color: 'black',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 20px 0',
                }}
              >
                Finance
              </h3>

              {/* Paragraphe */}
              <p style={{ color: '#013069', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
                Financial free education content can help fill your sales funnel with qualified leads, but only when it’s considered strategically.
              </p>
            </div>
          </div>

          {/* Quatrième rectangle avec image à gauche et texte à droite */}
          <div
            style={{
              width: '580px',
              height: '231px',
              backgroundColor: '#EFBED3',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            {/* Cadre blanc pour l'image à gauche */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '10px',
                border: '4px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              {/* Image à gauche */}
              <img
                src="/art.png" // Chemin de l'image dans le dossier public
                alt="Design"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Contenu à droite (titre + paragraphe) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Titre "Design" */}
              <h3
                style={{
                  color: 'black',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 20px 0',
                }}
              >
                Design
              </h3>

              {/* Paragraphe */}
              <p style={{ color: '#013069', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
                Learn the basics of design and improve your creativity with free educational content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourRectanglesWithTitles;