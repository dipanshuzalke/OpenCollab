import React from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">IdeaNest</div>
        <div>
          <ul className="flex items-center space-x-6 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">Events</li>
            <li className="hover:text-gray-400 cursor-pointer">Ideas</li>
            <li className="hover:text-gray-400 cursor-pointer">Projects</li>
            <li className="hover:text-gray-400 cursor-pointer">Community Chat</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
            <button 
              onClick={() => navigate('/register')}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Signup
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Log in
            </button>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-6xl font-bold mb-4">Turn Ideas to Reality</h1>
        <h1 className="text-5xl font-bold mb-4">Your journey of innovation starts here.</h1>
        <p className="text-xl mb-2 text-gray-300">
        Join a vibrant community of innovators, collaborate on impactful projects, and shape the future with your creativity.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-lg font-semibold"
          >
            Get Started
          </button>
          <button 
            className="px-8 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 text-lg font-semibold"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Down Icon */}
        <div className="mt-10 animate-bounce">
          <svg
            className="w-12 h-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
