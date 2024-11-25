import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user data (e.g., tokens or session)
   // Clear stored token or user info
    sessionStorage.clear(); // Clear session if any
    
    // Redirect to the login page
    navigate('/');
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
