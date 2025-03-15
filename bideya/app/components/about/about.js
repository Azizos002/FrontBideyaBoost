import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
export default function EnactusSection() {
  return (
    <>
    <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-sm">

{/* Logo centré */}
<div className="text-2xl font-extrabold text-blue-900 ml-8"> {/* Taille et position de "Bideya Boost" */}
  Bideya Boost
</div>

{/* Navigation */}
<ul className="flex space-x-10 flex-1 justify-center text-blue-700 text-l font-semibold"> {/* Modifications ici */}
  <li>
    <Link href="/" className="text-blue-700 hover:text-blue-900 hover:border-b-2 border-blue-500">
      Home
    </Link>
  </li>
  <li>
    <Link href="/categorie" className="text-blue-900 hover:border-b-2">
      Categories
    </Link>
  </li>
  <li>
    <Link href="/about" className="text-blue-900 hover:border-b-2">
      About
    </Link>
  </li>
  <li>
    <Link href="/contact" className="text-blue-900 hover:border-b-2">
      Contact Us
    </Link>
  </li>
  <li>
    <Link href="/features" className="text-blue-900 hover:border-b-2">
      Features
    </Link>
  </li>
</ul>

{/* Icône et bouton alignés à droite */}
<div className="flex items-center space-x-4 ml-auto">
  <FiSearch className="text-blue-500 w-6 h-6 hover:border-b-2 cursor-pointer" /> {/* Taille de l'icône augmentée */}
  <button className="px-4 py-3 text-blue-700 border border-blue-700 rounded-full  hover:border-b-2  text-l font-semibold"> {/* Taille du bouton augmentée */}
    Get Started
  </button>
</div>
</nav>

    <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-100" style={{ backgroundImage: "url('/aboutUs.jpg')" }}></div>
      <h1 className="text-5xl font-bold text-[#013069] text-center mb-6 relative z-10">Who we are ?</h1>
      <p className="text-center text-lg max-w-2xl text-gray-700 relative z-10">
        Enactus ISIMa is a proud chapter of the global Enactus network, committed to entrepreneurial action for social good. We aim to address local and regional challenges through technology and innovation.
      </p>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg mt-10 max-w-4xl w-full border border-gray-200 relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800">About Enactus</h2>
        <p className="text-center text-gray-600 mt-2">
          Enactus is a global organization dedicated to inspiring students to take entrepreneurial action for social good. Operating in over 36 countries, it empowers young leaders to address societal challenges through innovation and business principles.
        </p>
        
        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-[#FDEE5B] text-center p-4 w-48 rounded-xl border border-[#013069]">
            <p className="text-2xl font-bold">+36</p>
            <p className="text-sm">countries</p>
          </div>
          <div className="bg-[#FDEE5B] text-center p-4 w-48 rounded-xl border border-[#013069]">
            <p className="text-2xl font-bold">+69k</p>
            <p className="text-sm">students engaged</p>
          </div>
          <div className="bg-[#FDEE5B] text-center p-4 w-48 rounded-xl border border-[#013069]">
            <p className="text-2xl font-bold">+13.2M</p>
            <p className="text-sm">lives impacted</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg mt-6 max-w-4xl w-full border border-gray-200 relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800">About Enactus ISIMA</h2>
        <p className="text-center text-gray-600 mt-2">
          At Enactus ISIMa, we focus on leveraging technology and entrepreneurship to create solutions for local and regional challenges. Our projects align with the Sustainable Development Goals (SDGs).
        </p>
      </div>
    </div>
    </>
  );
}
