"use client"; // Required for using hooks in Next.js 13

import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import { useState } from "react";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (Object.values(formData).some((value) => value === "")) {
      setError("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Erreur lors du Login !");
      }

      const data = await res.json();

      // Store token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Afficher la notification de succès
      toast.success(`Welcome back ${data.user.name} !`, {
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
        router.push("/PodcastPage");
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <ToastContainer /> {/* Conteneur des notifications */}

      <div className="border-2 border-[#E4E5E0] flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Login Section */}
        <div className="p-4 w-[50%]">
          <h2 className="text-3xl font-bold text-[#013069] text-center"> Login</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* User Type Selection */}
            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-[400px] h-[40px] bg-[#317AC1] rounded-[10px] flex items-center justify-center">
                <div className="flex space-x-20">
                  <label className="flex items-center">
                    <span className="text-white">Student</span>
                  </label>
                  <label className="flex items-center relative">
                    <div className="absolute bottom-[-3.5px] left-1/2 transform -translate-x-1/2 w-[130px] h-[26px] bg-white rounded-sm"></div>
                    <span className="text-[#000000] relative z-10">Teacher</span>
                  </label>
                  <label className="flex items-center">
                    <span className="text-white">Parent</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Email/Phone Field */}
            <div className="flex justify-center">
              <div className="w-[400px]">
                <label htmlFor="emailPhone" className="block text-sm font-medium text-[#000000] pl-5.5 mb-1">
                  Email or phone number
                </label>
                <input
                  type="text"
                  id="emailPhone"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email or your phone number"
                  className="w-full h-[40px] pl-6 pr-3 py-2 border-[1px] border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-center">
                <div className="w-[400px]">
                  <label htmlFor="password" className="block text-sm font-medium text-[#000000] pl-5.5 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="w-full h-[40px] pl-6 pr-3 py-2 border-[1px] border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}


            {/* Checkboxes */}
            <div className="flex items-center space-x-15">
              <div className="flex items-center ml-13">
                <img src="/imnotarobot.jpg" alt="I'm not a robot" className="h-9 w-auto" />
              </div>
              <div className="flex items-center space-x-1">
                <FaRegSquareCheck className="text-[#0C9BAB] h-4 w-4 ml-12" />
                <span className="text-[12px] text-[#000000]">Keep me logged in</span>
              </div>
            </div>

            <div className="flex items-center justify-center my-6 w-[400px] mx-auto">
              <div className="w-[400%] h-px bg-[#E4E5E0]"></div>
              <span className="mx-4 text-[12px] text-[#E4E5E0]">OR</span>
              <div className="w-[400%] h-px bg-[#E4E5E0]"></div>
            </div>

            {/* Social Login */}
            <div className="text-center">
              <button
                type="button"
                className="w-[300px] h-[35px] text-131900 rounded-md mt-4 focus:outline-none focus:ring-2 border-2 border-[#E4E4E0] flex items-center justify-center mx-auto"
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                <span>Sign in with Google</span>
              </button>
            </div>

            {/* Login Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-[250px] h-[35px] bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link href="/SignInPage" className="text-blue-600 hover:underline relative">
                Create one now
                <span className="absolute bottom-0 left-0.5 right-0.5 w-full h-[1px] bg-blue-400"></span>
              </Link>
            </p>
          </form>
        </div>

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
            <ul className="mt-6 text-sm text-[#013069] Konkhmer Sleokchher font-semibold space-y-2">
              <li> Discover your strengths</li>
              <li> Gain expert insights</li>
              <li> Connect with professionals</li>
              <li> Unlock your potential</li>
            </ul>
            <div className="mt-6">
              <p className="text-md text-[#013069] font-semibold">
                Log in now and take control of your journey!
              </p>
              <div className="w-full h-[1px] bg-[#013069] my-5"></div>
              <p className="mt-2 text-sm text-[#013069] text-center">
                Follow us on our social media
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-5">
              <FaFacebook className="text-[#1877F2] text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaInstagram className="text-[#C13584] text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaXTwitter className="text-black text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaYoutube className="text-red-600 text-2xl hover:scale-100 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}