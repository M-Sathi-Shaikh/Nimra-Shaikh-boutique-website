import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import qrCode from "../assets/qr-code.png";
import logo from "../assets/logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";

export default function Deposit() {
  const referralLink = "2Xce34btR4Yn(o%";
  const [copied, setCopied] = useState(false);
  const [depositType, setDepositType] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0f23] to-[#16213e] text-white">
      <Navbar />

      <div className="flex-grow">

        {/* LOGO */}
        <div className="flex justify-center mt-6 mb-4">
          <img
            src={logo}
            alt="logo"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full"
          />
        </div>

        {/* TAB BAR */}
        <div className="flex justify-center px-4">
          <div className="bg-gray-800 rounded-xl p-2 flex gap-2 shadow-md">
            
            <button
              onClick={() => setDepositType("usdt")}
              className={`px-5 py-2 rounded-lg font-semibold ${
                depositType === "usdt"
                  ? "bg-green-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              USDT
            </button>

            <button
              onClick={() => setDepositType("crypto")}
              className={`px-5 py-2 rounded-lg font-semibold ${
                depositType === "crypto"
                  ? "bg-green-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Crypto
            </button>

            <button
              onClick={() => setDepositType("random")}
              className={`px-5 py-2 rounded-lg font-semibold ${
                depositType === "random"
                  ? "bg-green-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Random
            </button>

          </div>
        </div>

        {/* ===== INSTRUCTIONS ALWAYS HERE ===== */}
<div className="max-w-xl mx-auto mt-4 px-4">

  {/* DEFAULT (NO TAB SELECTED) */}
  {!depositType && (
    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-700/20 border border-indigo-500 rounded-xl p-5 shadow-lg text-center">
      <h2 className="text-lg font-bold text-indigo-400 mb-2">
        Welcome to Deposit Portal
      </h2>
      <p className="text-sm text-gray-300 mb-3">
        Choose a method above to get started.
      </p>

      <ul className="text-sm text-gray-400 space-y-1">
        <li>• Fast & secure transactions</li>
        <li>• Multiple deposit options available</li>
        <li>• 24/7 support via WhatsApp & Email</li>
        <li>• Instant confirmation after submission</li>
      </ul>
    </div>
  )}

  {depositType === "usdt" && (
    <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 border border-green-500 rounded-xl p-5 shadow-lg">
      <h2 className="text-lg font-bold text-green-400 mb-2">
        USDT Deposit Instructions
      </h2>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>• Open Trust Wallet</li>
        <li>• Scan QR code</li>
        <li>• Send exact USDT amount</li>
        <li>• Take payment screenshot</li>
        <li>• Submit proof via WhatsApp/email</li>
      </ul>
    </div>
  )}

  {depositType === "crypto" && (
    <div className="bg-gradient-to-r from-blue-500/20 to-purple-700/20 border border-blue-500 rounded-xl p-5 shadow-lg">
      <h2 className="text-lg font-bold text-blue-400 mb-2">
        Crypto Deposit Instructions
      </h2>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>• Select your coin</li>
        <li>• Enter amount</li>
        <li>• Enter correct wallet address</li>
        <li>• Verify network</li>
        <li>• Submit deposit</li>
      </ul>
    </div>
  )}

  {depositType === "random" && (
    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500 rounded-xl p-5 shadow-lg text-center">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">
        Coming Soon 🚀
      </h2>
      <p className="text-sm text-gray-300">
        This feature is not available right now. Launching soon!
      </p>
    </div>
  )}

</div>

        {/* ================= USDT UI ================= */}
        {depositType === "usdt" && (
          <>
            <div className="flex justify-center mt-6 mb-4">
              <span className="text-4xl font-bold text-gray-200">Z$</span>
            </div>

            <h2 className="text-xl font-bold text-center mb-2">
              Deposit Funds
            </h2>
            <p className="text-sm text-center text-gray-400 mb-4">
              Deposit via Trust Wallet
            </p>

            <div className="flex justify-center mb-4">
              <div className="bg-white p-2 rounded-md">
                <img
                  src={qrCode}
                  alt="qr"
                  className="w-40 h-40 md:w-48 md:h-48"
                />
              </div>
            </div>

            <div className="text-center mt-10 px-4">
              <h2 className="text-2xl font-bold">Your Referral Link</h2>

              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="w-full sm:w-80 px-4 py-2 rounded-lg bg-gray-800"
                />

                <button
                  onClick={handleCopy}
                  className="px-5 py-2 bg-green-500 rounded-lg"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 px-4 flex-wrap">
              <a
                href="mailto:shaikhsathi41@gmail.com"
                className="bg-green-500 px-4 py-2 rounded-lg"
              >
                📧 Email
              </a>

              <a
                href="https://wa.me/923141605658"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </>
        )}

        {/* ================= CRYPTO UI ================= */}
        {depositType === "crypto" && (
          <div className="flex flex-col items-center mt-6 px-4">
            <h2 className="text-xl font-bold mb-4">Crypto Deposit</h2>

            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <select className="w-full mb-3 p-2 rounded bg-gray-700">
                <option>Bitcoin</option>
                <option>Ethereum</option>
                <option>USDT</option>
              </select>

              <input
                type="number"
                placeholder="Amount"
                className="w-full mb-3 p-2 rounded bg-gray-700"
              />

              <input
                type="text"
                placeholder="Wallet Address"
                className="w-full mb-3 p-2 rounded bg-gray-700"
              />

              <button className="w-full bg-green-500 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}