// src/pages/EarningsAnalytics.jsx
import React, { useState } from "react";

export default function EarningsAnalytics() {
  const [activePeriod, setActivePeriod] = useState("7D");

  const earningsData = {
    "7D": { btc: "0.02567", usd: "$1,742.10" },
    "30D": { btc: "0.08623", usd: "$5,860.22" },
    "90D": { btc: "0.14567", usd: "$9,420.55" },
    "1Y": { btc: "0.25678", usd: "$16,642.29" },
  };

  return (
    <section id="earnings" className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Earnings Analytics</h3>

      <div className="bg-[#1A1E2E]/70 p-5 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Total Earnings</div>
          <div className="flex gap-2">
            {["7D", "30D", "90D", "1Y"].map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period)}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition cursor-pointer ${
                  activePeriod === period
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="text-left">
          <div className="text-2xl md:text-4xl text-yellow-400 font-bold mb-1">{earningsData[activePeriod].btc} BTC</div>
          <p className="text-gray-400 text-lg">{earningsData[activePeriod].usd}</p>
        </div>

        <div className="mt-4 w-full md:w-1/2">
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{
                width:
                  activePeriod === "7D"
                    ? "30%"
                    : activePeriod === "30D"
                    ? "55%"
                    : activePeriod === "90D"
                    ? "75%"
                    : "100%",
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-1 text-right">{activePeriod} Earnings Progress</p>
        </div>
      </div>
    </section>
  );
}