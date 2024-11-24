// src/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">My App</h1>
        <div className="space-x-4">
          <Link to="/details">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Bill Splitting
            </button>
          </Link>
          <Link to="/tracker">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
              Tracker
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
