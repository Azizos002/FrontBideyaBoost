import React from "react";


const internships = [
  { name: "Dr. Foulen ben Flouen", domain: "Science", period: "3 Days", type: "On Site" },
  { name: "Mr. Foulen ben Flouen", domain: "IT", period: "1 Week", type: "Remote" },
  { name: "Ms. Foulena ben Flouena", domain: "Health", period: "4 Days", type: "On Site" },
  { name: "Dr. Foulen ben Flouen", domain: "IT", period: "4 Days", type: "On Site" },
  { name: "Ms. Foulena ben Flouena", domain: "Teacher", period: "2 Days", type: "On Site" },
];

export default function Internships() {
  return (
    <>
     
   
    <div className="p-6 bg-white min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold bg-yellow-400 px-6 py-2 inline-block rounded-lg">
          Interships and Info-sessions
        </h1>
        <p className="mt-2 text-gray-700">
          Gain real-world experience by joining internships, hackathons, and networking events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-yellow-400 p-4 rounded-lg">
          <h2 className="font-bold">University & Scholarship Guidance 🎓</h2>
          <p className="text-sm">Tips on choosing the right university, applying for scholarships, and funding studies.</p>
          <button className="mt-2 bg-yellow-600 text-white py-1 px-4 rounded hover:bg-yellow-700">Reserve now</button>
        </div>
        <div className="bg-[#AAC6FC] p-4 rounded-lg">
          <h2 className="font-bold">Mental Health & Well-being 🧘</h2>
          <p className="text-sm">20 Feb - 10 AM</p>
          <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">Show more</button>
        </div>
        <div className="bg-[#EFBED3] p-4 rounded-lg">
          <h2 className="font-bold">Soft Skills Development 🎤</h2>
          <p className="text-sm">21 Feb - 10 AM</p>
          <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">Show more</button>
        </div>
        <div className="bg-[#7FD7C2] p-4 rounded-lg">
          <h2 className="font-bold">Industry Expert Talks 🏭</h2>
          <p className="text-sm">22 Feb - 10 AM</p>
          <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">Show more</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Internship Opportunities</h2>
          <div className="flex gap-2">
            <select className="border p-1 rounded hover:bg-gray-200">
              <option>24h</option>
            </select>
            <select className="border p-1 rounded hover:bg-gray-200">
              <option>Science</option>
            </select>
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Domain</th>
              <th className="py-2">Period</th>
              <th className="py-2">Type</th>
              <th className="py-2">Apply</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((intern, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{intern.name}</td>
                <td className="py-2">{intern.domain}</td>
                <td className="py-2">{intern.period}</td>
                <td className="py-2">{intern.type}</td>
                <td className="py-2">
                  <button className="bg-gray-300 py-1 px-3 rounded hover:bg-gray-400">Apply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button className="bg-gray-300 py-1 px-3 rounded hover:bg-gray-400">1</button>
          <button className="bg-gray-300 py-1 px-3 rounded ml-2 hover:bg-gray-400">2</button>
          <button className="bg-gray-300 py-1 px-3 rounded ml-2 hover:bg-gray-400">3</button>
          <button className="bg-gray-300 py-1 px-3 rounded ml-2 hover:bg-gray-400">...</button>
        </div>
      </div>
    </div>
    </>
  );
}