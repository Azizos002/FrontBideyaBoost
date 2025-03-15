import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12 px-8 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-black">
          
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-3">
              <FaFacebookF className="text-blue-600" />
              <span className="tracking-wide">/bideyaBoost</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <FaInstagram className="text-pink-500" />
              <span className="tracking-wide">/bideyaBoost</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaYoutube className="text-red-600" />
              <span className="tracking-wide">/bideyaBoost</span>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 underline">About Us</h3>
            <ul className="space-y-3">
              <li className="hover:underline cursor-pointer">Our Team →</li>
              <li className="text-blue-600 hover:underline cursor-pointer">Our Interns →</li>
              <li className="hover:underline cursor-pointer">Our Finances →</li>
              <li className="hover:underline cursor-pointer">Our Partners →</li>
              <li className="hover:underline cursor-pointer">Internships →</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our services</h3>
            <ul className="space-y-3 text-sm">
              <li>• Personalized Guidance and Skills Assessment</li>
              <li>• Practical Workshops and Skill Development</li>
              <li>• Access to Real Opportunities</li>
              <li>• Dynamic Educational Content</li>
              <li>• Support for Parents and Institutions</li>
              <li>• Advanced Technology and Accessibility</li>
            </ul>
          </div>

          {/* Who Can Join Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Who can Join Us</h3>
            <ul className="space-y-3">
              <li className="font-semibold">Student</li>
              <li className="font-semibold">Teacher</li>
              <li className="font-semibold">Parent</li>
              <li className="font-semibold">Organisation</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <footer className="bg-black text-gray-500 text-center py-4 mt-6">
        <p className="text-sm">© 2025 Bideya Boost. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
