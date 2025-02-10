import React from "react";
import { BellIcon, ChartBarIcon, UserIcon, ShoppingCartIcon, PhoneIcon } from "@heroicons/react/24/outline";

const AdminDashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-5 space-y-4">
        <h1 className="text-2xl font-bold">⚡ OpenColab</h1>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              <ChartBarIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              <ChartBarIcon className="h-5 w-5" />
              <span>Add new Project</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              <ChartBarIcon className="h-5 w-5" />
              <span>Users</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              <ChartBarIcon className="h-5 w-5" />
              <span>About</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg">Total Projects</h2>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm"></p>
            </div>
            <UserIcon className="h-10 w-10 opacity-50" />
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg">Ongoing</h2>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm"></p>
            </div>
            <ShoppingCartIcon className="h-10 w-10 opacity-50" />
          </div>

          <div className="bg-red-500 text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg">Completed</h2>
              <p className="text-3xl font-bold">1</p>
            </div>
            <PhoneIcon className="h-10 w-10 opacity-50" />
          </div>
        </div>

        {/* Bar Chart & Notifications */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Bar Chart</h2>
            <div className="h-48 bg-gray-200 flex items-end space-x-2 p-4">
              <div className="w-10 bg-blue-500 h-20"></div>
              <div className="w-10 bg-blue-500 h-32"></div>
              <div className="w-10 bg-blue-500 h-10"></div>
              <div className="w-10 bg-blue-500 h-12"></div>
              <div className="w-10 bg-blue-500 h-6"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span>New comment</span>
                <span className="text-sm text-gray-500">21 days ago</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>New comment</span>
                <span className="text-sm text-gray-500">21 days ago</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>New comment</span>
                <span className="text-sm text-gray-500">21 days ago</span>
              </li>
              <li className="text-blue-500 cursor-pointer mt-2">Show all</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
