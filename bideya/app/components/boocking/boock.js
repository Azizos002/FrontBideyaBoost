'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

// toast.configure();

const BookingPage = () => {
  const [services, setServices] = useState([]); // State to hold the services data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any error

  useEffect(() => {
    // Static array of services
    const staticServices = [
      { _id: '1', fullName: 'John Doe', scholarLevel: 'PhD', availabalities: true },
      { _id: '2', fullName: 'Jane Smith', scholarLevel: 'Master', availabalities: false },
      { _id: '3', fullName: 'Alice Johnson', scholarLevel: 'Bachelor', availabalities: true },
      { _id: '4', fullName: 'Bob Brown', scholarLevel: 'PhD', availabalities: false },
      { _id: '5', fullName: 'Charlie White', scholarLevel: 'Master', availabalities: true },
      { _id: '6', fullName: 'Diana Green', scholarLevel: 'Bachelor', availabalities: true },
      { _id: '7', fullName: 'Ethan Black', scholarLevel: 'PhD', availabalities: false },
      { _id: '8', fullName: 'Fiona Blue', scholarLevel: 'Master', availabalities: true },
    ];

    setServices(staticServices);
    setLoading(false);
  }, []); // Empty dependency array to run effect only once on mount

  const handleBooking = (service) => {
    toast.success(`Meet with ${service.fullName} Booked !`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
  };

  return (
    <>
          <ToastContainer /> {/* Conteneur des notifications */}

      <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-sm">
        <div className="text-2xl font-extrabold text-blue-900 ml-8">Bideya Boost</div>

        <ul className="flex space-x-10 flex-1 justify-center text-blue-700 text-l font-semibold">
          <li>
            <Link href="/" className="text-blue-700 hover:text-blue-900 hover:border-b-2 border-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="text-blue-900 hover:border-b-2">Booking</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-900 hover:border-b-2">Podcast</Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-900 hover:border-b-2">Reels</Link>
          </li>
          <li>
            <Link href="/features" className="text-blue-900 hover:border-b-2">Features</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 ml-auto">
          <FiSearch className="text-blue-500 w-6 h-6 hover:border-b-2 cursor-pointer" />
          <button className="px-4 py-3 text-blue-700 border border-blue-700 rounded-full hover:border-b-2 text-l font-semibold">
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center p-6">
        <div className="bg-yellow-400 text-xl font-bold py-2 px-6 rounded-md mb-6">BOOKING</div>

        {/* Loading and error handling */}
        {loading ? (
          <p>Loading services...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {services.map((service) => (
              <div key={service._id} className="border p-4 rounded-lg shadow-md w-full bg-white">
                <h3 className="text-lg font-semibold">{service.fullName}</h3>
                <p className="text-gray-600">Service</p>
                <p className="font-bold">{service.scholarLevel}</p>
                <p className="mt-2">Availability:</p>
                <p className={service.availabalities ? 'text-green-600' : 'text-red-600'}>
                  {service.availabalities ? 'Available' : 'Fully Booked'}
                </p>
                <div className="mt-4">
                  {service.availabalities ? (
                    <button
                      onClick={() => handleBooking(service)}
                      className="text-blue-600 font-semibold"
                    >
                      Schedule Now
                    </button>
                  ) : (
                    <p className="text-gray-400">Fully Booked</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BookingPage;
