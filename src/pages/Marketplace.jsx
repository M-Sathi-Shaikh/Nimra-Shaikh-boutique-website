// src/pages/Marketplace.jsx
import React from "react";

// GPU Marketplace images
import card1 from "../assets/card1.png";
import card3 from "../assets/card3.png";

export default function Marketplace() {
  const gpuCards = [
    { name: "NVIDIA RTX 4090", hash: "1.21 GH/s", power: "450W", rot: "92%", referrals: "15", price: "$67", img: card1 },
    { name: "NVIDIA RTX 4080", hash: "1.05 GH/s", power: "380W", rot: "90%", referrals: "10", price: "$57", img: card3 },
    { name: "NVIDIA RTX 4070", hash: "850 MH/s", power: "300W", rot: "88%", referrals: "8", price: "$47", img: card1 },
  ];

  return (
    <section id="gpu-marketplace" className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">GPU Marketplace</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gpuCards.map((gpu, i) => (
          <div
            key={i}
            className="bg-[#1A1E2E]/70 p-4 rounded-xl shadow-md flex flex-col items-center"
          >
            <img src={gpu.img} alt={gpu.name} className="w-full h-40 object-contain rounded-lg mb-3" />
            <h4 className="font-semibold text-center mb-2">{gpu.name}</h4>
            <div className="w-full space-y-1 text-gray-300 text-sm">
              <div className="flex justify-between"><span>Hashrate</span><span>{gpu.hash}</span></div>
              <div className="flex justify-between"><span>Power</span><span>{gpu.power}</span></div>
              <div className="flex justify-between"><span>ROT</span><span>{gpu.rot}</span></div>
              <div className="flex justify-between"><span>Referrals</span><span>{gpu.referrals}</span></div>
              <div className="flex justify-between font-bold text-yellow-400 mt-2"><span>Price</span><span className="text-green-500">{gpu.price}</span></div>
            </div>
            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium w-full">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}