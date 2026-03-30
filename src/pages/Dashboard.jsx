import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import BitcoinChart from "../components/BitCoinChart";
import Marketplace from "./Marketplace";
import EarningsAnalytics from "./EarningsAnalytics";

export default function Dashboard() {
  const [prices, setPrices] = useState({});
  const [change, setChange] = useState({});

  const fetchData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await res.json();

    setPrices({
      btc: data.bitcoin.usd,
      eth: data.ethereum.usd,
      sol: data.solana.usd,
    });

    setChange({
      btc: data.bitcoin.usd_24h_change,
      eth: data.ethereum.usd_24h_change,
      sol: data.solana.usd_24h_change,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Sample animated bars data
  const statsBars = [
    { name: "Mining Efficiency", value: 75, color: "bg-yellow-400" },
    { name: "Referral Bonus", value: 50, color: "bg-green-400" },
    { name: "GPU Utilization", value: 90, color: "bg-blue-400" },
  ];

  return (
    <div className="space-y-6">

      {/* TOP CARDS */}
      <div className="grid md:grid-cols-3 gap-4">
        <CryptoCard name="BTC" price={prices.btc} change={change.btc} />
        <CryptoCard name="ETH" price={prices.eth} change={change.eth} />
        <CryptoCard name="SOL" price={prices.sol} change={change.sol} />
      </div>

      {/* Animated Dashboard Bars */}
      <div className="space-y-4">
        {statsBars.map((bar, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{bar.name}</span>
              <span className="text-sm font-medium">{bar.value}%</span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`${bar.color} h-4 rounded-full`}
                style={{ width: `${bar.value}%`, transition: "width 1s ease-in-out" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="bg-[#1A1E2E]/70 p-5 rounded-xl">
        <h3 className="mb-4 text-lg font-semibold">Market Trends</h3>
        <BitcoinChart days={7} />
      </div>

      {/* GPU Marketplace */}
      <Marketplace />

      {/* Earnings Analytics */}
      <EarningsAnalytics />

    </div>
  );
}