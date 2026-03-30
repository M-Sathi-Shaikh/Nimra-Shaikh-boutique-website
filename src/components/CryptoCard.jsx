export default function CryptoCard({ name, price, change }) {
  const color = change > 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-[#1A1E2E]/70 p-4 rounded-xl">
      <h3 className="text-gray-400">{name}</h3>
      <p className="text-xl font-bold">${price || "..."}</p>
      <p className={color}>
        {change ? change.toFixed(2) + "%" : "..."}
      </p>
    </div>
  );
}