import React, { useContext, useState } from "react";
import { BtcContext } from "../context/BtcContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StartMining() {
  const { addBtc } = useContext(BtcContext);
  const [isMining, setIsMining] = useState(false);

  const handleMine = () => {
    if (isMining) return;
    addBtc(1);
    setIsMining(true);
    setTimeout(() => setIsMining(false), 60000); // 1 minute 
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white font-['Inter']"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Start Mining</h1>
        <button
          onClick={handleMine}
          disabled={isMining}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            isMining
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:brightness-95"
          }`}
        >
          {isMining ? "Mining..." : "Mine"}
        </button>
      </main>
      <Footer />
    </div>
  );
}
