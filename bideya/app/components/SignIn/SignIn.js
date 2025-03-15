'use client';

import { FaRegSquareCheck } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    phone: "",
    birthDate: "",
    scholarLevel: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (Object.values(formData).some((value) => value === "")) {
      setError("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Erreur lors de l'inscription !");
      }

      // Afficher la notification de succès
      toast.success(`Account created successfully ✅`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirection après un court délai pour permettre la notification
      setTimeout(() => {
        router.push("/LoginPage");
      }, 3000);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <ToastContainer /> {/* Conteneur des notifications */}

      <div className="border-2 border-[#E4E5E0] flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">

        {/* Welcome Section */}
        <div
          className="relative w-[50%] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img2.jpg)',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="relative z-10 bg-[#D9D9D9] rounded-[20px] p-8 w-[90%] h-[90%] text-center">
            <h1 className="text-3xl font-bold text-[#013069]">🚀 WELCOME 🚀</h1>
            <h2 className="text-xl font-semibold mt-2 text-[#013069]">🚀 TO BIDEYA BOOST 🚀</h2>
            <p className="mt-4 text-sm Konkhmer Sleokchher font-semibold text-[#013069]">
              Your future starts here! Bideya Boost empowers students and graduates with <u>personalized guidance</u>, <u>expert mentorship</u>, and <u>real-world opportunities</u> to make informed career and education choices.
            </p>
          </div>
        </div>

        {/* Sign-In Section */}
        <div className="p-4 w-[50%]">
          <h2 className="text-3xl font-bold text-[#013069] text-center mb-6">Sign in</h2>
          <form className="space-y-2 rounded-[20px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="input-field"
                value={formData.fullName}
                onChange={handleChange}
              />
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Profession</option>
                <option>Student</option>
                <option>Graduate</option>
                <option>Professional</option>
                <option>Expert</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
              <input
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <input
              name="scholarLevel"
              type="text"
              placeholder="Scholar Level / Domaine"
              value={formData.scholarLevel}
              onChange={handleChange}
              className="input-field"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-center">
              <button
                type="submit"
                className="mt-6 py-2 w-[250px] h-[35px] bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          padding: 10px;
          outline: none;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 20px;
          width: 100%;
          background-color: #E7E7E7;
        }
        .input-field:focus {
          border-color: #013069;
          box-shadow: 0 0 3px rgba(1, 48, 105, 0.5);
        }
      `}</style>
    </div>
  );
}
