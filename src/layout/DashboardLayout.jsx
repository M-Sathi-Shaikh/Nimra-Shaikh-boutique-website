// src/layout/DashboardLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBitcoin, FaHome, FaWallet, FaGift, FaChartLine } from "react-icons/fa";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Mining", path: "/mining", icon: <FaBitcoin /> },
    { name: "Deposit", path: "/deposit", icon: <FaWallet /> },
    { name: "Withdrawal", path: "/withdrawal", icon: <FaWallet /> },
    { name: "Referral", path: "/referral", icon: <FaGift /> },
    { name: "Earnings", path: "/earnings", icon: <FaChartLine /> },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <aside
        className={`hidden md:flex bg-gray-800 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="font-bold text-lg">{sidebarOpen && "Zemnti"}</span>

          <button
            className="p-1 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "<" : ">"}
          </button>
        </div>

        <nav className="flex-1 mt-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 m-2 rounded-md transition-colors hover:bg-gray-700 ${
                  isActive ? "bg-yellow-500 text-black" : ""
                }`
              }
            >
              <span className="text-xl">{link.icon}</span>
              {sidebarOpen && <span>{link.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}