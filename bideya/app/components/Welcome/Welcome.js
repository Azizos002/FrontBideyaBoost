"use client"; // needed if you use any React hooks in Next.js 13

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  h-screen overflow-hidden, flex flex-col items-center justify-between min-h-screen bg-white p-10">
      {/* Top Section */}
      <div className="h-screen overflow-hidden, text-center mb-40">
        <h1 className="text-3xl font-bold text-[#013069]">🚀 WELCOME 🚀</h1>
        <h2 className="text-3xl font-semibold mt-3 text-[#013069]">🚀 TO BIDEYA BOOST 🚀</h2>
        <p style={{ fontSize: '25px', color: '#013069' }} className="mt-4 font-semibold">A good Beginning makes a good ending!</p>
      </div>

      {/* Middle Section */}
      <div className="relative w-full max-w-[457px] h-[34px] my-8">
        {/* Image */}
        <div className="absolute bottom-38 left-1/2 transform -translate-x-1/2 w-[457px] h-[280px]">
          <Image
            src="/f0ea2bbe6480ffe986dbf7501eb29ef2-removebg-preview.png"
            alt="Welcome Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

           {/* Text Around Image */}
        {/* Top Left */}
        <div className="absolute top-[-370px] left-[-230px] text-center">
          <p style={{ fontSize: '30px', color: '#013069', fontFamily: 'Konkhmer Sleokchher' }}>Discover your strengths</p>
          <div className="w-full h-[2px] bg-[#013069] mt-2"></div>
        </div>

        {/* Top Right */}
        <div className="absolute top-[-370px] right-[-260px] text-center">
          <p style={{ fontSize: '30px', color: '#013069', fontFamily: 'Konkhmer Sleokchher' }}>Connect with professionals</p>
          <div className="w-full h-[2px] bg-[#013069] mt-2"></div>
        </div>

        {/* Bottom Left */}
        <div className="absolute top-[-210px] left-[-200px] text-center">
          <p style={{ fontSize: '30px', color: '#013069', fontFamily: 'Konkhmer Sleokchher' }}>Unlock your potential</p>
          <div className="w-full h-[2px] bg-[#013069] mt-2"></div>
        </div>

         {/* Bottom Right */}
         <div className="absolute top-[-210px] right-[-200px] text-center">          <p style={{ fontSize: '30px', color: '#013069', fontFamily: 'Konkhmer Sleokchher' }}>Gain expert insights</p>
          <div className="w-full h-[2px] bg-[#013069] mt-2"></div>
        </div>
      </div>
      
    </div>
  );
}