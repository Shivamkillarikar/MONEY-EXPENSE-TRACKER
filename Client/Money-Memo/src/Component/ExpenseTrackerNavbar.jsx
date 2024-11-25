import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseTrackerNavbar = () => {
  return (
    <nav className="bg-[#008080] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Expense Tracker
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/navbar">
            <button className="bg-white text-[#008080] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#66CDAA] transition duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ExpenseTrackerNavbar;
