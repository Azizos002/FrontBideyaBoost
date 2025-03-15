'use client';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';

// Reusable ReelContainer component
const ReelContainer = ({ title, subtitle, stats, imageSrc, profileImageSrc }) => {
  return (
    <div className="relative w-[300px] h-[500px] bg-white rounded-[34.42px] overflow-hidden border-2 border-[rgba(47,64,196,0.5)] flex-shrink-0 mx-4">
      {/* Main Image */}
      <img
        src={imageSrc}
        alt="Reel"
        className="absolute bottom-0 left-0 w-full h-full rounded-[10px] object-cover"
      />

      {/* Inner Container with Profile Image */}
      <div className="absolute w-[15%] h-[10%] top-[4%] left-[5%] bg-gray-200 rounded-[50px] overflow-hidden z-10">
        <img src={profileImageSrc} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Title and Subtitle */}
      <div className="absolute top-7.5 left-20 text-[#FFFFFF]">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm font-semibold opacity-50">{subtitle}</div>
      </div>

      {/* Stats Container */}
      <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-[#013069] bg-opacity-70 rounded-lg px-3 py-3 z-10">
        {/* Heart Icon */}
        <FaHeart className="text-white text-sm top:'4px' " />
        {/* Stats Text */}
        <div className="text-white text-sm font-semibold">{stats}</div>
      </div>
    </div>
  );
};

const Reels = () => {
  return (
    <div className="relative w-full min-h-screen p-10 ">
      {/* Title Section */}
      <div className="text-center mb-15 ">
        <h1 className="text-4xl font-bold text-[#013069]">
          Bideya Boost{' '}
          <span className="bg-gradient-to-r from-[#013069] to-[#F9BE01] bg-clip-text text-transparent">
            Reels
          </span>
        </h1>
   
        <p style={{ fontWeight: 'bold', fontSize: '30px', color: '#013069', padding:'20px' }}>Oriente et inspire ton avenir !</p>

      </div>

      {/* Reel Containers (Horizontal Scrollable) */}
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        {/* Reel 1 */}
        <ReelContainer
          title="Business"
          subtitle="19 hours ago"
          stats="27.3 | 1.2k"
          imageSrc="/Reel1.jpg"
          profileImageSrc="/Reel1.1.jpg"
        />

        {/* Reel 2 */}
        <ReelContainer
          title="Technology"
          subtitle="10 hours ago"
          stats="27.3 | 1.2k"
          imageSrc="/Reel2.png"
          profileImageSrc="/Reel2.2.jpg"
        />

        {/* Reel 3 */}
        <ReelContainer
          title="Education"
          subtitle="1 Day ago"
          stats="27.3 | 1.2k"
          imageSrc="/Reel3.jpg"
          profileImageSrc="/Reel3.3.jpg"
        />

        {/* Reel 4 */}
        <ReelContainer
          title="MINDSET"
          subtitle="2 minutes ago"
          stats="27.3 | 1.2k"
          imageSrc="/Reel4.jpg"
          profileImageSrc="/Reel4.4.jpg"
        />

        {/* Reel 5 */}
        <ReelContainer
          title="Preliminary"
          subtitle="10 hours ago"
          stats="27.3 | 1.2k"
          imageSrc="/Reel5.jpg"
          profileImageSrc="/Reel5.5.jpg"
        />

        {/* Add more reels as needed */}
      </div>

      {/* Custom CSS to Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </div>
  );
};

export default Reels;