
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/dashboard/view" className="text-white font-bold text-xl">
            Dashboard
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/dashboard/view" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="ml-auto">
              <Link to="/dashboard/create" className="text-white hover:text-gray-300 bg-green-500 px-4 py-2 rounded">
                Add Food
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
