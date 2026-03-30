import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Referral = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "link copy here";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const levels = [
    {
      id: 1,
      status: "Completed",
      name: "Bronze Miner",
      progress: 100,
      completedText: "4/4 Completed",
      reward: "$100 USD",
      rewardColor: "text-green-400",
      checkColor: "text-green-400",
      border: "border-green-400",
      progressColor: "bg-green-400",
      statusColor: "bg-green-500",
    },
    {
      id: 2,
      status: "Completed",
      name: "Silver Miner",
      progress: 100,
      completedText: "4/4 Completed",
      reward: "$250 USD",
      rewardColor: "text-white",
      checkColor: "text-green-400",
      border: "border-green-400",
      progressColor: "bg-green-400",
      statusColor: "bg-green-500",
    },
    {
      id: 3,
      status: "Pending",
      name: "Golden Miner",
      progress: 70,
      completedText: "3/4 In Progress",
      reward: "$500 USD",
      rewardColor: "text-yellow-400",
      checkColor: "text-yellow-400",
      border: "border-yellow-400",
      progressColor: "bg-yellow-400",
      statusColor: "bg-yellow-500",
    },
    {
      id: 4,
      status: "Pending",
      name: "Platinum Miner",
      progress: 40,
      completedText: "2/4 In Progress",
      reward: "$750 USD",
      rewardColor: "text-gray-300",
      checkColor: "text-gray-300",
      border: "border-gray-300",
      progressColor: "bg-gray-300",
      statusColor: "bg-gray-400",
    },
    {
      id: 5,
      status: "Pending",
      name: "Diamond Miner",
      progress: 10,
      completedText: "1/4 In Progress",
      reward: "$1000 USD",
      rewardColor: "text-gray-300",
      checkColor: "text-gray-300",
      border: "border-gray-300",
      progressColor: "bg-gray-300",
      statusColor: "bg-gray-400",
    },
  ];

  const referrals = [
    { user: "Urs Chandio", date: "Dec 15, 2025", status: "ACTIVE", earnings: "$45.20" },
    { user: "Wajeno", date: "Dec 18, 2025", status: "ACTIVE", earnings: "$32.50" },
    { user: "Ali", date: "Dec 22, 2025", status: "ACTIVE", earnings: "$60.10" },
    { user: "Rajjib", date: "Dec 20, 2025", status: "PENDING", earnings: "$18.75" },
  ];

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <Navbar />


      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Referral Program</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Earn massive bonuses by inviting friends to join Charm9t's mining platform.
        </p>
      </div>


      <div className="flex flex-wrap justify-center mt-8 gap-4 sm:gap-6 px-4">
        {[
          { value: 12, label: "Total Referrals" },
          { value: "$850", label: "Total Earned" },
          { value: 3, label: "Current Line" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-60 rounded-2xl p-5 text-center bg-gray-800/50 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
              {item.value}
            </h2>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>


      <div className="text-center mt-12 px-4">
        <h2 className="text-2xl font-bold">Your Referral Link</h2>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full sm:w-80 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold w-full sm:w-auto"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>


      <div className="mt-20 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Referral Levels & Bonuses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {levels.map((level) => (
            <motion.div
              key={level.id}
              whileHover={{ scale: 1.03 }}
              className={`border-t-4 ${level.border} p-5 sm:p-6 w-full rounded max-w-sm bg-gray-800/50 shadow-xl`}
            >
              <div className="flex justify-between items-center">
                <div
                  className={`rounded-full ${level.statusColor} px-3 py-1 text-sm sm:text-lg font-bold`}
                >
                  {level.id}
                </div>
                <div
                  className={`text-xs px-3 py-1 rounded-full ${level.statusColor} text-black font-semibold`}
                >
                  {level.status}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-4">{level.name}</h3>
              <p className="text-gray-400 text-sm">4 Referrals Required</p>

              <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
                <div
                  className={`${level.progressColor} h-2 rounded-full`}
                  style={{ width: `${level.progress}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-400 mt-1">{level.completedText}</p>

              <div className="mt-4 border border-gray-700 bg-gray-700 rounded-xl p-3 text-center">
                <p className={`text-lg sm:text-xl font-bold ${level.rewardColor}`}>
                  {level.reward}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">Bonus Reward</p>
              </div>

              <ul className="mt-3 text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className={`${level.checkColor} text-xs`} /> 5% commission
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className={`${level.checkColor} text-xs`} /> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className={`${level.checkColor} text-xs`} /> Mining tips
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="mt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Referrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-0">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400 text-sm sm:text-base">
                <th className="p-3">USER</th>
                <th className="p-3">DATE JOINED</th>
                <th className="p-3">STATUS</th>
                <th className="p-3">EARNINGS</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((r, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                      {r.user.charAt(0)}
                    </div>
                    {r.user}
                  </td>
                  <td className="p-3 text-gray-400">{r.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        r.status === "ACTIVE"
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-600 text-white"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="p-3">{r.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="mt-20 px-4 sm:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {[
            {
              title: "Share Your Link",
              text: "Copy and share your referral link to start earning.",
            },
            {
              title: "Invite Friends",
              text: "Encourage your friends to join Charm9t and mine securely.",
            },
            {
              title: "Friends Start Mining",
              text: "Once they start mining, you’ll get your bonus.",
            },
            {
              title: "Earn Rewards",
              text: "Track your referrals and earn bigger rewards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-6 text-center bg-gray-800/40 shadow-md w-full max-w-xs"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{i + 1}</h3>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Referral;
