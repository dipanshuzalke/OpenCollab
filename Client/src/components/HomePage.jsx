import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaHome, FaCog, FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-screen w-1/5 p-5 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">IdeaNest</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaHome /> Home
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaUser /> Profile
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaCog /> Settings
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaUserCircle /> Account
        </a>
      </nav>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <div className="text-2xl font-bold">IdeaNest</div>
      <ul className="flex items-center space-x-6 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">Events</li>
        <li className="hover:text-gray-400 cursor-pointer">Ideas</li>
        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
        <Link to="/community-chat" className="hover:text-gray-400 cursor-pointer">
          Community Chat
        </Link>
        <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        <button 
          onClick={() => navigate("/register")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Signup
        </button>
        <button 
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Log in
        </button>
      </ul>
    </nav>
  );
};

const ProfileCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">Automated Traffic Controller</h3>
        <p className="text-gray-400">21 | 01 | 2025</p>
        <p className="mt-2 text-gray-300">
          An Automated Traffic Controller is a smart system that optimizes traffic flow using sensors, AI, and adaptive signal.
        </p>
        <button className="mt-4 bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600">View Details</button>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <p className="text-white">51 contributions</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex bg-gray-800 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-10 flex-1 flex flex-col gap-6">
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div>
              <h1 className="text-white text-2xl font-bold">User Name</h1>
              <p className="text-gray-400">@username</p>
            </div>
          </div>
          <h1 className="text-white text-3xl font-bold">Welcome to Your Dashboard</h1>
          <ProfileCard />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
