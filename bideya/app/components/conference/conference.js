import React from "react";
import NavBar from "../homePage/nav";

const conferences = [
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
  { title: "L’impact de l’IA dans l’éducation", speaker: "Dr. Foulen ben Flouen", time: "20Feb | 10 PM" },
];

export default function Conferences() {
  return (
    <>
      <NavBar/>
   
    <div className="p-6 bg-white min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold bg-yellow-400 px-6 py-2 inline-block rounded-lg">Conferences</h1>
        <p className="mt-2 text-gray-700">
          Join expert-led conferences to gain insights into industry trends, innovations, and career opportunities. Engage in discussions, ask questions, and expand your knowledge while connecting with professionals and like-minded peers!
        </p>
      </div>
      
      <div className="flex gap-6">
        <div className="w-2/3">
          <h2 className="text-lg font-bold">Interactive Program</h2>
          <div className="flex gap-2 my-2">
            <button className="bg-gray-200 px-3 py-1 rounded">Science</button>
            <button className="bg-gray-200 px-3 py-1 rounded">Personal Development</button>
            <button className="bg-gray-200 px-3 py-1 rounded">Finance</button>
            <button className="bg-gray-200 px-3 py-1 rounded">Art</button>
          </div>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="border-b">
                <th className="py-2">Conference title</th>
                <th className="py-2">Speaker</th>
                <th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {conferences.map((conf, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 text-black underline">{conf.title}</td>
                  <td className="py-2">{conf.speaker}</td>
                  <td className="py-2  text-black px-2 py-1 rounded">{conf.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="w-1/3 flex justify-center items-center border rounded-lg p-4">
          <div className="relative">
            <img src="enactor.jpg" alt="Conference Preview" className="rounded-lg" />
            <button className="absolute inset-0 flex items-center justify-center s bg-opacity-50 text-white text-4xl rounded-lg">
              ▶
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-200 p-6 mt-6 rounded-lg flex items-center gap-4">
        <div>
          <img src="/faq.jpg" alt="FAQ" className="w-20" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Live Streaming and Q&A</h2>
          <p>Join our live streams to ask your questions in real time and interact with the experts.</p>
          <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2">
            LIVE <span>📢</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
