import React from "react";
import logo from "../assets/logo.png";
import Footer from "./Footer";

export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm md:max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain mb-3 rounded-full" />
            <h2 className="text-2xl font-bold mt-2">{title}</h2>
          </div>
          {children}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
