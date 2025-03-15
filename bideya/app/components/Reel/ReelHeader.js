"use client"; // needed if you use any React hooks in Next.js 13

import { useState } from "react";
import Link from "next/link";
import { CiMicrophoneOn } from "react-icons/ci";

export default function ReelHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/HomePage" },
    { label: "Booking", href: "/categories" },
    { label: "Podcast", href: "/PodcastPage" },
    { label: "Reels", href: "/" },
    { label: "Features", href: "./infoSession.js" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white"> {/* Removed shadow-sm */}
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-900 ml-8 flex items-center">
        <CiMicrophoneOn className="mr-2" />
        Podcast Section
      </div>

      {/* Adjusted Navigation Menu */}
      <nav className="flex-1 flex justify-center">
        <ul className="md:flex space-x-12 text-blue-900 text-xl font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`hover:text-blue-700 ${
                  item.label === "Reels" ? "border-b-2 border-blue-500" : "" // Changed from "Podcast" to "Reels"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section (Search Icon + Explore Premium Button) */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        {/* Explore Premium Button */}
        <Link
          href="#"
          style={{
            padding: "8px 16px", // Equivalent to px-4 py-2
            border: "1px solid #2F40C4", // Equivalent to border border-blue-700
            borderRadius: "9999px", // Equivalent to rounded-full
            background: "linear-gradient(to right, #013069, #F9BE01)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#2F40C4", // Fallback color
            fontSize: "18px", // Equivalent to text-lg
            fontWeight: "600", // Equivalent to font-semibold
            textDecoration: "none", // Remove underline from Link
            transition: "background 0.3s ease", // Smooth transition for hover effect
          }}
          className="hover:bg-blue-500 hover:text-white"
        >
          Explore premium
        </Link>
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
                <Link
                  href={item.href}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Search Icon & Explore Premium Button in Mobile */}
            <li className="flex space-x-4">
              {/* Explore Premium Button */}
              <Link
                href="#"
                className="px-6 py-3 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-500 hover:text-white text-lg font-semibold"
              >
                Explore premium
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}