import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Withdraw() {
  const [formData, setFormData] = useState({
    amount: "",
    walletId: "",
    walletAddress: "",
  });

  const [withdrawals] = useState([
    { date: "2025-10-25 14:30", amount: "0.0100 BTC", status: "Completed" },
    { date: "2025-10-21 09:15", amount: "0.0050 BTC", status: "Completed" },
    { date: "2025-10-19 18:00", amount: "0.0020 BTC", status: "Pending" },
    { date: "2025-10-11 11:00", amount: "0.0030 BTC", status: "Completed" },
    { date: "2025-10-25 14:30", amount: "0.0100 BTC", status: "Completed" },
    { date: "2025-10-21 09:15", amount: "0.0050 BTC", status: "Completed" },
    { date: "2025-10-19 18:00", amount: "0.0020 BTC", status: "Pending" },
    { date: "2025-10-11 11:00", amount: "0.0030 BTC", status: "Completed" },
    { date: "2025-10-25 14:30", amount: "0.0100 BTC", status: "Completed" },
    { date: "2025-10-21 09:15", amount: "0.0050 BTC", status: "Completed" },
    { date: "2025-10-19 18:00", amount: "0.0020 BTC", status: "Pending" },
    { date: "2025-10-11 11:00", amount: "0.0030 BTC", status: "Completed" },
    { date: "2025-10-25 14:30", amount: "0.0100 BTC", status: "Completed" },
    { date: "2025-10-21 09:15", amount: "0.0050 BTC", status: "Completed" },
    { date: "2025-10-19 18:00", amount: "0.0020 BTC", status: "Pending" },
    { date: "2025-10-11 11:00", amount: "0.0030 BTC", status: "Completed" },
    { date: "2025-10-25 14:30", amount: "0.0100 BTC", status: "Completed" },
    { date: "2025-10-21 09:15", amount: "0.0050 BTC", status: "Completed" },
    { date: "2025-10-19 18:00", amount: "0.0020 BTC", status: "Pending" },
    { date: "2025-10-11 11:00", amount: "0.0030 BTC", status: "Completed" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    alert("Withdrawal request submitted!");
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen flex flex-col items-center justify-start gap-10 px-6 py-16 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      >

        <h2 className="text-3xl font-semibold text-green-400 text-center mb-4">
          Withdrawal History
        </h2>

        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full max-w-5xl">
       
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full md:w-[40%] bg-[#1A1E2E]/70 backdrop-blur-md rounded-2xl shadow-lg border border-green-500/40 p-6"
          >
            <form className="space-y-5" onSubmit={handleWithdraw}>
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Amount (BTC)
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.0050"
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Bitcoin Wallet ID
                </label>
                <input
                  type="text"
                  name="walletId"
                  value={formData.walletId}
                  onChange={handleChange}
                  placeholder="A000826"
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Bitcoin Wallet Address
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  placeholder="T3233X680539780361022072938"
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400 text-white"
                />
              </div>

              <p className="text-gray-400 text-sm">
                Network Fee: <span className="text-green-400">0.0001 BTC</span>
              </p>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-md mt-3 transition-all duration-200"
              >
                Confirm Withdrawal
              </button>
            </form>
          </motion.div>

          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full md:w-[50%] bg-[#1A1E2E]/70 backdrop-blur-md rounded-2xl shadow-lg border border-green-500/40 p-6"
          >
            <div className="overflow-y-auto border border-green-500/30 rounded-xl">
              <table className="w-full text-left text-gray-300 text-sm">
                <thead className="bg-green-500/10 text-green-400 ">
                  <tr>
                    <th className="px-4 py-3">Date & Time</th>
                    <th className="px-4 py-3">Amount (BTC)</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.map((w, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-700 hover:bg-gray-800/60 transition"
                    >
                      <td className="px-4 py-3">{w.date}</td>
                      <td className="px-4 py-3 text-green-400">{w.amount}</td>
                      <td
                        className={`px-4 py-3 font-semibold ${
                          w.status === "Completed"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {w.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
