import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Top-right buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Link
          to="/SignIn"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
        >
          Sign In
        </Link>
        <Link
          to="/SignUp"
          className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Center content */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Welcome</h1>
      </div>
    </div>
  );
};

export default LandingPage;
