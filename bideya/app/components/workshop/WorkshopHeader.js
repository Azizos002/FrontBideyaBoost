"use client"; // needed if you use any React hooks in Next.js 13

import { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importing search icon from react-icons/fi

export default function WorkshopHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Categories", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Features", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-900 ml-5">
        Bideya Boost
      </div>

      {/* Adjusted Navigation Menu */}
      <nav className="flex-1 flex justify-center">
        <ul className="md:flex space-x-8 text-blue-700 text-lg font-medium">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${
                  index === 4 // Underline under "Features" (index 4)
                    ? "text-blue-700 border-b-2 border-blue-500"
                    : "text-blue-900 hover:text-blue-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section (Search Icon + Get Started Button) */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        {/* Search Icon */}
        <FiSearch className="text-blue-500 w-6 h-6 hover:text-blue-700 cursor-pointer" />

        {/* Get Started Button */}
        <a
          href="#"
          className="px-4 py-2 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-500 hover:text-white text-lg font-semibold"
        >
          Get Started
        </a>
      </div>

      {/* Hamburger button (mobile) */}
      <button
        className="md:hidden text-blue-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 5h16M4 12h16M4 19h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-blue-900 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Search Icon & Get Started Button in Mobile */}
            <li className="flex space-x-4">
              {/* Search Icon */}
              <FiSearch className="text-blue-500 w-6 h-6 hover:text-blue-700 cursor-pointer" />

              {/* Get Started Button */}
              <a
                href="#"
                className="px-4 py-2 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-500 hover:text-white text-lg font-semibold"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}