import React from "react";
import { motion } from "framer-motion";

export default function WithdrawModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1A1E2E] text-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg border border-gray-700 relative"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Withdraw Funds
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded-lg bg-[#0f1220] border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg bg-[#0f1220] border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Wallet Address</label>
            <input
              type="text"
              placeholder="Enter your USDT wallet address"
              className="w-full p-2 rounded-lg bg-[#0f1220] border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Amount (USDT)</label>
            <input
              type="number"
              step="0.0001"
              placeholder="0.002"
              className="w-full p-2 rounded-lg bg-[#0f1220] border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition"
          >
            Submit Withdrawal
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
}
