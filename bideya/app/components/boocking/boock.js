'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const BookingPage = () => {
  const [services, setServices] = useState([]); // State to hold the services data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any error
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/users/experts', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data = await response.json();
        setServices(data); // Set the fetched services to state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices(); // Call the function to fetch services
  }, []); // Empty dependency array to run effect only once on mount

  const handleBooking = async (service) => {
    try {
      setLoading(true);
      setConfirmation(null); // Reset previous confirmation message

      const token = localStorage.getItem('token');
      if (!token) {
        setConfirmation('Please log in to book a service');
        setLoading(false);
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meetings/book`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expert: service._id, date: new Date().toISOString() }), // Ensure date is passed if required
      });
      console.log(service._id);

      const data = await response.json();

      if (!response.ok) {
        console.log(response);
        throw new Error(data.message || 'Booking failed');
      }

      setConfirmation('Meeting booked successfully');
    } catch (error) {
      console.error(error);
      setConfirmation(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

        {/* Display Confirmation Message */}
        {confirmation && <p className="text-green-600 font-bold">{confirmation}</p>}

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
