// components/NavBar.js
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;