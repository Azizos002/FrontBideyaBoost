"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavBar from "../homePage/nav";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
export default function Hackathons() {
  const [activeTab, setActiveTab] = useState("friends");

  const hackathons = [
    { name: "Hackathon0", domain: "IT", period: "20 Hours", type: "On Site" },
    { name: "Hackathon1", domain: "Science", period: "24 Hours", type: "On Site" },
    { name: "Hackathon2", domain: "IT", period: "48 Hours", type: "Remote" },
    { name: "Hackathon3", domain: "Science", period: "24 Hours", type: "On Site" },
    { name: "Hackathon4", domain: "IT", period: "24 Hours", type: "On Site" },
    { name: "Hackathon5", domain: "Teacher", period: "14 Hours", type: "On Site" }
  ];

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
          <Link href="/infoSession" className="text-blue-900 hover:border-b-2">
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
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Titre */}
      <div className="bg-yellow-500 text-center px-6 py-3 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900">Hackathons and Networking</h1>
      </div>
      <p className="text-center text-gray-700 mt-2 max-w-3xl">
        Participate in hackathons and networking events to collaborate, innovate, and connect with industry professionals...
      </p>

      {/* Section principale */}
      <div className="mt-6 w-full max-w-5xl flex">
        {/* Cartes Amis */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">FRIENDS SUGGESTIONS</h2>
          <input type="text" placeholder="🔍 Search for new Friends..." className="w-full border px-3 py-2 rounded-md shadow-sm" />
          <div className="flex items-center justify-center mt-4 space-x-4">
            <FaArrowLeft className="text-blue-500 cursor-pointer text-2xl hover:text-blue-700" />
            <div className="flex space-x-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-blue-200 p-4 rounded-lg shadow-md text-center w-48 hover:scale-105 transition-transform">
                  <div className="h-24 bg-gray-300 rounded-lg"></div>
                  <h3 className="font-semibold mt-2">FLEN BEN FOULEN</h3>
                  <p className="text-sm text-gray-600">19 YEARS OLD</p>
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700">Show more</button>
                </div>
              ))}
            </div>
            <FaArrowRight className="text-blue-500 cursor-pointer text-2xl hover:text-blue-700" />
          </div>
        </div>

        {/* Friends List / Chat / Requests */}
        <div className="ml-6 w-80 bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center bg-yellow-500 px-4 py-2 rounded-md">
            {["friends", "chat", "requests"].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-md transition ${
                  activeTab === tab ? "bg-yellow-700 text-white" : "text-gray-900 "
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "friends" ? "Friends List" : tab === "chat" ? "+ Chat" : "+ Requests"}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {activeTab === "friends" &&
              ["James", "Will Kerry", "Beth Williams", "Roy Shen"].map((name, index) => (
                <div key={index} className="flex items-center space-x-3 border-b pb-2">
                  <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-600">New message...</p>
                  </div>
                </div>
              ))}

            {activeTab === "chat" && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-gray-600">💬 Open chat with your friends...</p>
              </div>
            )}

            {activeTab === "requests" &&
              ["Request from John", "Request from Sarah", "Request from Mark"].map((request, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-md">
                  {request}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Liste des Hackathons */}
      <div className="mt-10 w-full max-w-5xl">
        <h2 className="text-lg font-semibold text-gray-800">HACKATHON LIST</h2>
        <div className="bg-white shadow-md rounded-lg mt-2 overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4">Hackathon</th>
                <th className="py-2 px-4">Domain</th>
                <th className="py-2 px-4">Period</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {hackathons.map((hackathon, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{hackathon.name}</td>
                  <td className="py-2 px-4">{hackathon.domain}</td>
                  <td className="py-2 px-4">{hackathon.period}</td>
                  <td className="py-2 px-4">{hackathon.type}</td>
                  <td className="py-2 px-4">
                    <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-500 hover:text-white transition">
                      Participate ➡️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center space-x-2">
          {[1, 2, 3, 4, "...", 100].map((page, index) => (
            <button key={index} className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-400 transition">
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
