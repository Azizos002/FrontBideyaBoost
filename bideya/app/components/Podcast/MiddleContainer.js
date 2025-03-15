import React from 'react';

const MiddleContainer = () => {
  return (
    <div
      style={{
        position: 'absolute', // Relative positioning for the container
        width: '250px',
        height: '280px',
        bottom: '-115px',
        left: '848px',
        backgroundColor: 'white',
        border: '2px solid rgba(47, 64, 196, 0.5)', // Border with 50% opacity
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      {/* Image Containers */}
      <div
        style={{
          position: 'absolute',
          top: '110px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0px',
        }}
      >
        {/* Podcaster 1 */}
        <div
          style={{
            width: '49px',
            height: '52px',
            borderRadius: '50%',
            backgroundImage: "url('/Podcaster1.jpg')", // Corrected path
            backgroundSize: 'cover',
            border: '2px solid rgba(47, 64, 196, 0.8)',
          }}
        ></div>

        {/* Podcaster 2 */}
        <div
          style={{
            width: '49px',
            height: '52px',
            borderRadius: '50%',
            backgroundImage: "url('/Podcaster2.jpg')", // Corrected path
            backgroundSize: 'cover',
            border: '2px solid rgba(47, 64, 196, 0.8)',
          }}
        ></div>

        {/* Podcaster 3 */}
        <div
          style={{
            width: '49px',
            height: '52px',
            borderRadius: '50%',
            backgroundImage: "url('/Podcaster3.jpg')", // Corrected path
            backgroundSize: 'cover',
            border: '2px solid rgba(47, 64, 196, 0.8)',
          }}
        ></div>

        {/* Podcaster 4 */}
        <div
          style={{
            width: '49px',
            height: '52px',
            borderRadius: '50%',
            backgroundImage: "url('/Podcaster4.jpg')", // Corrected path
            backgroundSize: 'cover',
            border: '2px solid rgba(47, 64, 196, 0.8)',
          }}
        ></div>
      </div>

      {/* Text "10,000+ Experts monthly" */}
      <div
        style={{
          position: 'absolute',
          top: '210px', // Adjust as needed
          left: '52%',
          transform: 'translateX(-50%)',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#013069',
          textAlign: 'center',
        }}
      >
        10,000+<br />Experts monthly
      </div>

      {/* Microphone */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '120px',
          backgroundImage: "url('/micro1.png')", // Corrected path
          backgroundSize: 'cover',
          left: '50%',
          top: '-2%',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
};

export default MiddleContainer;