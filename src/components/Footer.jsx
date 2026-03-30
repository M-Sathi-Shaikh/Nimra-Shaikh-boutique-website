import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E1A] text-gray-400 text-sm pt-10 pb-6 px-6 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        
        {/* ========= BRAND CARD ========= */}
        <div className="lg:col-span-1.5 flex flex-col items-center sm:items-start">
          <Link to="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition">
            <img src={logo} alt="Zemnti Logo" className="w-10 h-10 object-contain rounded-full" />
            <h2 className="text-white font-semibold text-xl">Zemnti</h2>
          </Link>
          <p className="text-gray-500 leading-relaxed max-w-xs text-center sm:text-left">
            Smart crypto mining platform designed for speed, reliability, and earnings.
            Securely manage and monitor your digital mining with ease.
          </p>
        </div>

        {/* ========= PLATFORM CARD ========= */}
        <div>
          <h3 className="text-white font-medium text-lg mb-3">Platform</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Dashboard</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">GPU Marketplace</Link></li>
            <li><Link to="/deposit" className="hover:text-yellow-400 transition">Deposit</Link></li>
            <li><Link to="/referral" className="hover:text-yellow-400 transition">Referral</Link></li>
            <li><Link to="/withdrawal" className="hover:text-yellow-400 transition">Withdraw</Link></li>
          </ul>
        </div>

        {/* ========= SUPPORT CARD ========= */}
        <div>
          <h3 className="text-white font-medium text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Help Center</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">API Distribution</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">Statistic Page</Link></li>
          </ul>
        </div>

        {/* ========= LEGAL CARD ========= */}
        <div>
          <h3 className="text-white font-medium text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">Create Policy</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition">Distribution</Link></li>
          </ul>
        </div>
      </div>

      {/* ========= BOTTOM COPYRIGHT ========= */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-white text-sm">Zemnti</span>. All rights reserved.
      </div>
    </footer>
  );
}
