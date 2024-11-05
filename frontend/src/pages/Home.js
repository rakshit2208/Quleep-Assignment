// src/pages/Home.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";


function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Common Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
