import React from "react";

const Events = () => {
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
      {/* Sidebar or other components */}
      <div className="flex-1 flex flex-col">
        <main className="p-10 flex-1 flex flex-col gap-6">
          {/* Profile section */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div>
              <h1 className="text-white text-2xl font-bold">User Name</h1>
              <p className="text-gray-400">@username</p>
            </div>
          </div>

          {/* Welcome message */}
          <h1 className="text-white text-3xl font-bold">Welcome to Your Dashboard</h1>

          {/* Events section */}
          <div className="flex flex-col gap-6">
            <Events />
            <Events /> {/* Add more events or replicate */}
            <Events />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
