'use client';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    if (Object.values(form).some((value) => value === "")) {
      setError("Veuillez remplir tous les champs !");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Erreur lors d'envoi du message !");
      }
    } catch (error) {
      setError(error.message);
    }
    
  };

  return (
    <>
    <div className="h-screen overflow-hidden min-h-screen flex items-center justify-center bg-white px-6 md:px-12">
      <div className="flex flex-wrap max-w-5xl w-full shadow-lg rounded-lg overflow-hidden">

        {/* Contact Information Section */}
        <div className="relative w-full md:w-1/2 bg-cover bg-center flex items-center opacity-50 justify-center p-6 md:p-10"
          style={{ backgroundImage: 'url(/contact.jpg)' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="relative z-10 bg-white bg-opacity-80 rounded-2xl p-6 w-[90%]">
            <h2 className="text-2xl font-bold text-[#013069] text-center mb-4">Get in touch</h2>
            <p className="text-sm text-gray-700 text-center mb-6">
              Feel free to reach out to us for any questions, support, or inquiries!
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#013069]" />
                <p className="text-sm font-semibold">Institut Supérieur d'Informatique de Mahdia (ISIMa) - Hiboun 5111</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#013069]" />
                <p className="text-sm font-semibold">enactusISIM2024-2025@gmail.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#013069]" />
                <p className="text-sm font-semibold">+216 99 999-999</p>
              </div>
            </div>

            {/* Social Media Links */}
            <p className="mt-6 text-center text-sm font-semibold">Follow us on our social media</p>
            <div className="flex justify-center space-x-4 mt-2">
              <FaFacebook className="text-[#1877F2] text-xl cursor-pointer" />
              <FaInstagram className="text-[#C13584] text-xl cursor-pointer" />
        
              <FaYoutube className="text-red-600 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#013069] text-center mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="input-field" required />
              <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="input-field" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="input-field" required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input-field" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="input-field" required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="input-field h-28 resize-none" required />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 100%;
          background-color: #F7F7F7;
          font-size: 14px;
        }
        .input-field:focus {
          border-color: #013069;
          outline: none;
          box-shadow: 0 0 4px rgba(1, 48, 105, 0.4);
        }
      `}</style>

    </div>
    <footer className="bg-[#013069] text-white py-4 px-4 relative">

<p className="font-montserrat text-[15px] font-medium text-white text-center">
    © 2024 Bideya Boost. All rights reserved.
  </p>

  </footer>
  </>
  );
}
