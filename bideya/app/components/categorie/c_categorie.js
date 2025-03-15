import React from 'react';
import { BsExclamationCircle } from "react-icons/bs"; // Importe l'icône

const Rectangles = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        marginTop: '100px',
      }}
    >
      {/* Rectangle 1 */}
      <div
        style={{
          width: '300px',
          height: '350px',
          backgroundColor: '#FBCE01',
          borderRadius: '18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 10px',
          position: 'relative',
        }}
      >
        {/* Icône */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#2F40C4',
            fontSize: '35px',
            cursor: 'pointer',
          }}
        >
          <BsExclamationCircle />
        </div>

        {/* Image */}
        <img
          src="/Science.png"
          alt="Science"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        {/* Ligne de séparation */}
        <div
          style={{
            width: '200px',
            height: '2px',
            backgroundColor: '#2F40C4',
            marginTop: '40px', // Pousse la ligne vers le bas
            marginBottom: '40px',
          }}
        ></div>

        {/* Titre */}
        <div
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Science & Technology
        </div>
      </div>

      {/* Rectangle 2 */}
      <div
        style={{
          width: '300px',
          height: '350px',
          backgroundColor: '#AAC6FC',
          borderRadius: '18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 10px',
          position: 'relative',
        }}
      >
        {/* Icône */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#2F40C4',
            fontSize: '35px',
            cursor: 'pointer',
          }}
        >
          <BsExclamationCircle />
        </div>

        {/* Image */}
        <img
          src="/Sport.png"
          alt="Sport"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        {/* Ligne de séparation */}
        <div
          style={{
            width: '200px',
            height: '2px',
            backgroundColor: '#2F40C4',
            marginTop: '40px',
            marginBottom: '30px',
          }}
        ></div>

        {/* Titre */}
        <div
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Sports & Physical Activities
        </div>
      </div>

      {/* Rectangle 3 */}
      <div
        style={{
          width: '300px',
          height: '350px',
          backgroundColor: '#EFBED3',
          borderRadius: '18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 10px',
          position: 'relative',
        }}
      >
        {/* Icône */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#2F40C4',
            fontSize: '35px',
            cursor: 'pointer',
          }}
        >
          <BsExclamationCircle />
        </div>

        {/* Image */}
        <img
          src="/Arts.png"
          alt="Arts"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        {/* Ligne de séparation */}
        <div
          style={{
            width: '200px',
            height: '2px',
            backgroundColor: '#2F40C4',
            marginTop: '40px',
            marginBottom: '40px',
          }}
        ></div>

        {/* Titre */}
        <div
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Arts & Creativity
        </div>
      </div>

      {/* Rectangle 4 */}
      <div
        style={{
          width: '300px',
          height: '350px',
          backgroundColor: '#7FD7C2',
          borderRadius: '18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 10px',
          position: 'relative',
        }}
      >
        {/* Icône */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#2F40C4',
            fontSize: '35px',
            cursor: 'pointer',
          }}
        >
          <BsExclamationCircle />
        </div>

        {/* Image */}
        <img
          src="/Finance.png"
          alt="Finance"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        {/* Ligne de séparation */}
        <div
          style={{
            width: '200px',
            height: '2px',
            backgroundColor: '#2F40C4',
            marginTop: '40px',
            marginBottom: '40px',
          }}
        ></div>

        {/* Titre */}
        <div
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Finance & Investment
        </div>
      </div>
    </div>
  );
};

export default Rectangles;