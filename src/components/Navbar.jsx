import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaBitcoin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BtcContext } from "../context/BtcContext";
import navlogo from "../assets/logo.jpeg";
import WithdrawModal from "../pages/WithdrawModal";

export default function Navbar({ onLogout, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const { btc } = useContext(BtcContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/"); // navigate to dashboard first
      // scroll after short delay to ensure component mounted
      setTimeout(() => {
        if (scrollToSection) scrollToSection(sectionId);
      }, 350);
    } else {
      if (scrollToSection) scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={navlogo}
            alt="Zemnti Logo"
            className="w-10 h-10 rounded-full object-contain cursor-pointer"
          />
          <span className="text-xl font-bold tracking-wide hidden sm:block cursor-pointer">
            Zemnti
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleScrollOrNavigate("dashboard")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Dashboard
          </button>
          <button
            onClick={() => handleScrollOrNavigate("gpu-marketplace")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            GPU Marketplace
          </button>
          <button
            onClick={() => handleScrollOrNavigate("earnings")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Earnings
          </button>

          <Link to="/mining" className="hover:text-yellow-400 transition">
            Start Mining
          </Link>
          <Link to="/deposit" className="hover:text-yellow-400 transition">
            Deposit
          </Link>
          <Link to="/withdrawal" className="hover:text-yellow-400 transition">
            Withdraw
          </Link>
          <Link to="/referral" className="hover:text-yellow-400 transition">
            Referral
          </Link>

          <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
            <FaBitcoin className="mr-1" />
            {btc.toFixed(2)} BTC
          </div>

          <button
            onClick={() => setIsWithdrawOpen(true)}
            className="bg-green-500 hover:bg-green-200 text-black px-4 py-1 rounded-md font-medium cursor-pointer"
          >
            Withdraw
          </button>

          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md font-medium cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center bg-yellow-500 text-black px-2 py-1 rounded-full font-semibold text-sm">
            <FaBitcoin className="mr-1" />
            {btc.toFixed(2)} BTC
          </div>

          <button
            onClick={() => setIsWithdrawOpen(true)}
            className="bg-green-500 hover:bg-green-200 text-black px-3 py-1 rounded-md font-medium text-sm"
          >
            Withdraw
          </button>

          <button
            className="text-2xl focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-3 border-t border-gray-700">
          <button
            onClick={() => handleScrollOrNavigate("dashboard")}
            className="block hover:text-yellow-400"
          >
            Dashboard
          </button>
          <button
            onClick={() => handleScrollOrNavigate("gpu-marketplace")}
            className="block hover:text-yellow-400"
          >
            GPU Marketplace
          </button>
          <button
            onClick={() => handleScrollOrNavigate("earnings")}
            className="block hover:text-yellow-400"
          >
            Earnings
          </button>

          <Link
            to="/mining"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Start Mining
          </Link>
          <Link
            to="/deposit"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Deposit
          </Link>
          <Link
            to="/withdrawal"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Withdrawal
          </Link>
          <Link
            to="/referral"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Referral
          </Link>

          <button
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium mt-2"
          >
            Logout
          </button>
        </div>
      )}

      {/* Withdraw Modal */}
      <WithdrawModal
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
      />
    </nav>
  );
}