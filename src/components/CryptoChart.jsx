import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CryptoChart({ coin = "bitcoin", days = 7 }) {
  const [data, setData] = useState([]);
  const [trend, setTrend] = useState("neutral");

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}`
      )
        .then((res) => res.json())
        .then((json) => {
          const formatted = json.prices.map((item) => ({
            time: new Date(item[0]).toLocaleDateString(),
            price: item[1],
          }));

          setData(formatted);

          // 🔥 Calculate trend
          if (formatted.length > 1) {
            const first = formatted[0].price;
            const last = formatted[formatted.length - 1].price;
            setTrend(last > first ? "up" : "down");
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [coin, days]);

  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke={trend === "up" ? "#22c55e" : "#ef4444"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Trend Indicator */}
      <div className="text-right mt-2 text-sm">
        {trend === "up" && <span className="text-green-400">▲ Bullish</span>}
        {trend === "down" && <span className="text-red-400">▼ Bearish</span>}
      </div>
    </div>
  );
}