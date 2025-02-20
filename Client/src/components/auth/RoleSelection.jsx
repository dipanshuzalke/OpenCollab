import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/register/${role}`); // Redirect to registration page with role
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 px-4 flex items-center border-4 border-dashed border-gray-600 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 animate__animated animate__fadeIn">
          Choose Your Role
        </h1>
        <div className="space-y-4 flex flex-col gap-3">
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleRoleSelect("student")}
          >
            Student
          </button>
          <button
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleRoleSelect("mentor")}
          >
            Mentor
          </button>
          <button
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleRoleSelect("professional")}
          >
            Professional
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default RoleSelection;
