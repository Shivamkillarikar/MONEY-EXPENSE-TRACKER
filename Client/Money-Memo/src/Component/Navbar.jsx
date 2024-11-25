import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
const Navbar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-700">
      <nav className="bg-white shadow-2xl rounded-xl w-full max-w-4xl p-10">
        <div className="text-center mb-8">
          {/* Brand Name */}
          <h1 className="text-5xl font-extrabold text-teal-600 tracking-wide">
            My App
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Manage your budget with ease and style
          </p>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-8">
          <Link to="/details">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
              Bill Splitting
            </button>
          </Link>
          <Link to="/tracker">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300">
              Tracker
            </button>
          </Link>
          <Link to="/auth">
           <SignOut />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
