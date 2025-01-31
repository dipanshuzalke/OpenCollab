import React from "react";

const HomePage = () => {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">OpenCollab</div>
        <div>
        <ul className="flex items-center space-x-6 text-lg">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Projects</li>
          <li className="hover:text-gray-400 cursor-pointer">ChatBot</li>
          <li className="hover:text-gray-400 cursor-pointer">Community Chat</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          Signup
        </button>
        <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          Log in
        </button>

        </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className=" text-6xl font-bold mb-4">Build, Innovate & Grow
        </h1>
        <h1 className="text-6xl font-bold mb-4">with Open Collaboration</h1>
        <p className="text-xl mb-2 text-gray-300">
        Join a global community of developers, contribute to meaningful projects, and turn ideas into reality.
        </p>

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
