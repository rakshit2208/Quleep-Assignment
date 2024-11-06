// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Header() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    toast.success("Successfully logged out!");  
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        
        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/create-blogs"
            className={`font-medium ${location.pathname === "/create-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
          >
            Create Blogs
          </Link>
          <Link
            to="/my-blogs"
            className={`font-medium ${location.pathname === "/my-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
          >
            My Blogs
          </Link>
          <Link
            to="/profile"
            className={`font-medium ${location.pathname === "/profile" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
          >
            Profile
          </Link>
          <Link
            to="/all-blogs"
            className={`font-medium ${location.pathname === "/all-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
          >
            All Blogs
          </Link>
          <button
            className="font-medium text-gray-700 hover:text-blue-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-start space-y-4 p-6">
              <Link
                to="/create-blogs"
                className={`font-medium ${location.pathname === "/create-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create Blogs
              </Link>
              <Link
                to="/my-blogs"
                className={`font-medium ${location.pathname === "/my-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Blogs
              </Link>
              <Link
                to="/profile"
                className={`font-medium ${location.pathname === "/profile" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/all-blogs"
                className={`font-medium ${location.pathname === "/all-blogs" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Blogs
              </Link>
              <button
                className="font-medium text-gray-700 hover:text-blue-500"
                onClick={() => {
                  handleLogout(); // Call handleLogout on mobile menu
                  setIsMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
