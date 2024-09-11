import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from './img/log-out.png'
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";





///  navbar page

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    signOut(auth)
    .then(() => {
      localStorage.removeItem('userUid')
      navigate('/login')
    })
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl  px-4 sm:px-6  mt-5 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex lg:w-full justify-around gap-6 items-center">

            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Daniyal
              </Link>
            </div>
            <div className="hidden md:flex  md:ml-6 md:space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
            {/* log out button */}
          <button onClick={handleLogOut} type="button" className="hidden md:flex"><img src={img} alt="" className="w-10" /></button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 md:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 flex justify-center flex-col items-center space-y-1 sm:px-3">
          <Link
            to="/"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
          >
          </Link>
          <button onClick={handleLogOut} type="button" className=""><img src={img} alt="" className="w-10" /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function ChatNavbar() {
  
  return(
    <div className="border-b border-gray-600  p-5 flex justify-between items-center">
                <h1 className="font-semibold text-xl">Chat app</h1>
                <button className="font-semibold text-lg">Logout</button>
            </div>
  )
}
export {ChatNavbar}