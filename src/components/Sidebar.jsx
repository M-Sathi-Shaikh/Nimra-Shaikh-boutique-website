import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Earnings", key: "earnings" },
    { name: "Marketplace", key: "marketplace" },
  ];

  return (
    <>
      {/* Hamburger Button (mobile only) */}
      <button
        className="fixed top-4 left-4 z-50 text-white text-2xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1A1E2E] p-5 space-y-4 z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <button
          className="text-white text-2xl mb-6 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold mb-6">Crypto SaaS</h2>

        {links.map((link) => (
          <button
            key={link.key}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              activePage === link.key
                ? "bg-yellow-500 text-black"
                : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActivePage(link.key);
              setIsOpen(false);
            }}
          >
            {link.name}
          </button>
        ))}
      </aside>
    </>
  );
}