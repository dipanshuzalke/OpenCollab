import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Call the logout API
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/logout`, {}, { withCredentials: true });

      // Clear the auth token after successful logout
      localStorage.removeItem("token");
      localStorage.removeItem("activationToken");

      // Redirect to the login page
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    // Redirect if user is not authenticated (optional)
    const token = localStorage.getItem("authToken");
    if (!token) {
      // navigate("/");
      console.warn("No token found. User might already be logged out.")
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1F2937]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Are you sure you want to sign out?
        </h2>
        <button
          onClick={handleSignOut}
          className="w-full rounded-md bg-red-600 py-2 px-4 text-white font-semibold 
          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;