import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {

  return (
    <div className="bg-gray-100 min-h-[86vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to Chat App
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        This is a simple homepage created with React.js and Tailwind CSS.
      </p>
      <div className="space-x-4">
        <Link
          to="/chatId"
          className="px-9 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Start
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Contact Us
        </Link>
      </div>
      
    </div>
  );
};

export default HomePage;

//  home page //
