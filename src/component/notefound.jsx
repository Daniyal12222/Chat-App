import React from 'react';
import { Link } from 'react-router-dom';

// NotFound page

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/home" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;