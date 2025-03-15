'use client';

import { Montserrat } from 'next/font/google';

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'], // Medium
});

export default function PodcastRecherche() {
  return (
    <section className="relative p-3.5 bg-white"> {/* Changed from fixed to relative */}
      {/* Barre de recherche - Independent Positioning */}
      <div
        className="w-[1050px] h-[40px] rounded-[15px] border-2 border-[#D4D3DC] bg-[#D4D3DC] flex items-center px-4"
        style={{
          position: 'absolute', // Absolute positioning
          top: '168px', // Distance from the top
          left: '450px', // Distance from the left
        }}
      >
        <input
          type="text"
          placeholder="Rechercher..."
          className={`w-full bg-transparent outline-none text-[#2F40C4]  text-[14px] font-medium ${montserrat.className}`}
        />
      </div>

      {/* Catégories - Scrollable Container with Hidden Scrollbar - Independent Positioning */}
      <div
        className="w-[1100px] overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{
          position: 'absolute', // Absolute positioning
          top: '220px', // Distance from the top
          left: '450px', // Distance from the left
          right: '50px', // Distance from the right
        }}
      >
        <div className="flex space-x-3">
          {[
            'Technology',
            'Science',
            'Business',
            'Education',
            'Artificial Intelligence',
            'Informatique',
            'Art',
            'Management',
            'Design',
            'Health',
            'Finance',
            'Marketing',
          ].map((category, index) => {
            const colors = [
              '#AAC6FC',
              '#EFBED3',
              '#FBCE01',
              '#D4D3DC',
              '#AD956B',
              '#AAC6FC',
              '#EFBED3',
              '#FBCE01',
              '#D4D3DC',
              '#AD956B',
              '#AAC6FC',
              '#EFBED3',
            ];
            return (
              <div
                key={index}
                className={`h-[36px] rounded-[15px] border-2 border-[#D4D3DC] flex items-center justify-center px-2`}
                style={{ backgroundColor: `${colors[index]}50` }}
              >
                <span className={`text-[#2F40C4] text-[16px] font-medium ${montserrat.className}`}>
                  {category}
                </span>
              </div>
            );
          })}
        </div>
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
    </section>
  );
}