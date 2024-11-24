// src/DetailsNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DetailsNavbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-800">Bill Splitter</h1>
        <div className="flex space-x-4">
          {/* <Link to="/details" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <button className="px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Overview
            </button>
          </Link> */}
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <button className="px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Back
            </button>
          </Link>
          <Link to='/past-splits' className="text-gray-700 hover:text-blue-600 transition duration-300">
            <button className="px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Past Split Record
            </button>
          </Link>
          {/* <Link to="/details/settings" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <button className="px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Settings
            </button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default DetailsNavbar;
