import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseTrackerNavbar = () => {
    return (
        
        <nav className="bg-blue-600 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <button className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-200">Back</button>
                    </Link>
                    <Link to="/tracker/chart">
                        <button className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-200">Charts</button>
                    </Link>
                    {/* <Link to="/tracker/reports">
                        <button className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-200">Reports</button>
                    </Link>
                    <Link to="/tracker/budget">
                        <button className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-200">Set Budget</button>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default ExpenseTrackerNavbar;
