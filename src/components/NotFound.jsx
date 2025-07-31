import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-white to-gray-100 text-gray-800">
      <h1 className="text-8xl font-bold text-blue-600 mb-4 animate-pulse">
        404
      </h1>
      <p className="text-2xl font-semibold mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg text-gray-600 mb-8 text-center">
        It seems you've wandered off track. Let us help you find your way back.
      </p>
      <Link
        to="/"
        className="px-8 py-3 rounded bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
