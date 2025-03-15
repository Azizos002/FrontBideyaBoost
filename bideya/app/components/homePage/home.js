// components/HeroSection.js
import Link from "next/link";
const HeroSection = () => {
    return (
      <section className="flex justify-center items-center min-h-165 bg-white pt-2">
        <div className="w-full max-w-7xl   bg-yellow-500 rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start">
          
          {/* Texte à gauche */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
              Get Best & Free Oriented Education
            </h1>
            <p className="text-lg text-gray-900">
              Interactive platform targeted at Orientation and Guidance of Tunisian Students
            </p>
            <Link href="/LoginPage" className="bg-blue-700 text-white px-6 py-3 center rounded-lg mt-4 hover:bg-blue-600 transition">
              Get Started
            </Link>
          </div>
  
          {/* Image à droite */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="w-full h-64 md:h-90 bg-cover bg-center rounded-lg" 
                 style={{ backgroundImage: "url('/home.png')" }}>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  