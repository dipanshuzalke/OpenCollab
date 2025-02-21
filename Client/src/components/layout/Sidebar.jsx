import React from 'react'
import { FaHome, FaUser, FaSearch, FaUserCircle } from 'react-icons/fa';
import { MdOutlineCreateNewFolder, MdChat } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#121212] text-white h-full p-5 flex flex-col gap-6">
      <h2 className="text-3xl font-bold ml-10">IdeaNest</h2>
      <hr className="border-t-2 border-gray-500 opacity-70" />
      <nav className="flex text-xl flex-col gap-6 items-start">
        <a href="/home" className="flex items-center gap-2 hover:text-gray-400">
          <FaHome /> Home
        </a>
        <a href="/events" className="flex items-center gap-2 hover:text-gray-400">
          <FaUser /> Events
        </a>
        <a href="/feed" className="flex items-center gap-2 hover:text-gray-400">
          <MdOutlineCreateNewFolder /> Feed
        </a>
        <Link to="/community-chat" className="flex items-center gap-2 hover:text-gray-400">
          <MdChat /> Community Chat
        </Link>
        <a href="/chats" className="flex items-center gap-2 hover:text-gray-400">
          <FaSearch /> Inbox
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaSearch /> Search
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <FaUserCircle /> Account
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

