import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/register/${role}`); // Redirect to registration page with role
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Are you a Student or a Mentor?</h1>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg m-2"
        onClick={() => handleRoleSelect("student")}
      >
        Student
      </button>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-lg m-2"
        onClick={() => handleRoleSelect("mentor")}
      >
        Mentor
      </button>
      <button
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg m-2"
        onClick={() => handleRoleSelect("professional")}
      >
        Professional
      </button>
    </div>
  );
};

export default RoleSelection;