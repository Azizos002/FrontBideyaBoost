import React from 'react';
import { FaStar } from 'react-icons/fa6';

// Reusable PodcastContainer component
const PodcastContainer = ({ title, specificName, rating, category, description, imageSrc, buttonText }) => {
  return (
    <div
      style={{
        position: 'relative', // Relative positioning for the container
        width: '339px',
        height: '450px',
        backgroundColor: 'white',
        border: '2px solid rgba(47, 64, 196, 0.5)',
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      {/* Podcast Name and Rating */}
      <div
        style={{
          position: 'absolute', // Absolute positioning
          top: '200px', // Adjust as needed
          left: '20px', // Adjust as needed
        }}
      >
        {/* Podcast Name */}
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#013069' }}>{title}</div>

        {/* Specific Podcast Name */}
        <div style={{ fontSize: '16px',fontWeight: 'bold', color: '#013069', opacity: '0.5', marginTop: '4px' }}>
          {specificName}
        </div>

        {/* Rating and Category */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
          <div style={{ fontSize: '12px', color: '#013069' }}>
            {rating} . {category}
          </div>
          <FaStar style={{ color: '#013069', fontSize: '12px', marginLeft: '5px' }} />
        </div>
      </div>

      {/* Podcast Description */}
      <div
        style={{
          position: 'absolute', // Absolute positioning
          top: '290px', // Adjust as needed
          left: '20px', // Adjust as needed
          fontSize: '17px',
          fontWeight: 'bold',
          color: '#013069',
        }}
      >
        {description}
      </div>

      {/* More Text */}
      <div
        style={{
          position: 'absolute', // Absolute positioning
          bottom: '50px', // Adjust as needed
          right: '20px', // Adjust as needed
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#013069',
        }}
      >
        More
      </div>

      {/* Play Now Button */}
      <button
  style={{
    position: 'absolute', // Absolute positioning
    bottom: '20px', // Adjust as needed
    left: '20px', // Adjust as needed
    width: '180px', // Adjust width to account for padding
    height: '30px',
    padding: '4px',
    backgroundColor: 'rgba(48, 66, 202, 0.6)', // Background color with opacity
    color: 'white', // Text color
    border: '1px solid #013069', // Stroke (border) with color #013069
    borderRadius: '6px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
  }}
>
  {buttonText}
</button>

      {/* Image */}
      <img
        src={imageSrc}
        alt="Podcast"
        style={{
          position: 'absolute', // Absolute positioning
          bottom: '267.5px', // Adjust as needed
          left: '0px', // Adjust as needed
          width: '350px', // Set width to 70% of the container
          height: '179px', // Maintain aspect ratio
          borderRadius: '18px',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

const PodcastPage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', padding: '22px' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#013069' }}>
  Bideya Boost{' '}
  <span
    style={{
      background: 'linear-gradient(to right, #013069, #F9BE01)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Podcasts
  </span>
</h1>
        <p style={{ fontSize: '18px', color: '#013069' }}>Listen, Explore, Evolve!!</p>
      </div>

      {/* Container 1: Mind & Machines */}
      <div style={{ position: 'absolute', top: '288px', left: '1155px' }}>
        <PodcastContainer
          title="Bideya Boost Podcast"
          specificName="Mind & Machines" // Specific name for Container 1
          rating="5.0 (1)"
          category="Technology"
          description="Bideya Boost Podcast is an exploration the impact of AI on work, creativity"
          imageSrc="/AI.jpg"
          buttonText="Play Now"
        />
      </div>

      {/* Container 2: Heart Treatment */}
      <div style={{ position: 'absolute', top: '288px', left: '450px' }}>
        <PodcastContainer
          title="Bideya Boost Podcast"
          specificName="Heart Treatment" // Specific name for Container 2
          rating="4.5 (1)"
          category="Medicine"
          description="Unpacks the science of cardiovascular well-being—exploring breakthroughs in heart medicine"  
          imageSrc="/Doctor.jpg"
          buttonText="Play Now"
        />
      </div>
    </div>
  );
};

export default PodcastPage;