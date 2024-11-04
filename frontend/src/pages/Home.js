import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Static Navigation Bar */}
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex space-x-6">
            <Link
              to="/create-blogs"
              className={`font-medium ${
                location.pathname === "/create-blogs"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Create Blogs
            </Link>
            <Link
              to="/my-blogs"
              className={`font-medium ${
                location.pathname === "/my-blogs"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              My Blogs
            </Link>
            <Link
              to="/profile"
              className={`font-medium ${
                location.pathname === "/profile"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Profile
            </Link>
            <Link
              to="/all-blogs"
              className={`font-medium ${
                location.pathname === "/all-blogs"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              All Blogs
            </Link>
            <button
              className="font-medium text-gray-700 hover:text-blue-500"
              onClick={() => {
                /* Handle Logout */
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;