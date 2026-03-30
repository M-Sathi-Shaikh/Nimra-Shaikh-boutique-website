import { motion } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";

export default function Home({ onLogout }) {


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white font-['Inter']"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <Navbar onLogout={onLogout} scrollToSection={scrollToSection} />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-start space-y-8"
        >
          <h1 className="text-4xl font-bold leading-snug">
            Start Mining Effortlessly with{" "}
            <span className="text-blue-400">Zemnti</span>
          </h1>

          <p className="text-gray-300 max-w-md">
            Secure, fast, and efficient Bitcoin mining with just a click.
            Experience real-time mining and earnings tracking with our simple
            dashboard.
          </p>


          <div className="grid grid-cols-3 sm:grid-cols-3 gap-5 w-full mt-6">
            <div className="rounded-xl text-center p-4">
              <h2 className="text-2xl font-bold text-white">$2.4M+</h2>
              <p className="text-gray-400 text-sm mt-1">Total Earnings</p>
            </div>

            <div className="rounded-xl text-center p-4">
              <h2 className="text-2xl font-bold text-white">15,000+</h2>
              <p className="text-gray-400 text-sm mt-1">Active Miners</p>
            </div>

            <div className="rounded-xl text-center p-4 sm:col-span-1 col-span-2 mx-auto w-full sm:w-auto">
              <h2 className="text-2xl font-bold text-white">99.9%</h2>
              <p className="text-gray-400 text-sm mt-1">Uptime</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/mining"
              className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:brightness-95 transition-all"
            >
              Start Mining
            </Link>
          </div>
        </motion.div>

<div className="relative flex justify-center items-center md:justify-center md:items-center mt-10 md:mt-0">

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-56 h-36 bg-[#141d33] rounded-xl flex items-center justify-center text-gray-300 border border-gray-600 shadow-lg relative z-10"
          >
            Active
          </motion.div>

          <div className="absolute right-[-10px] sm:right-[-40px] md:right-[-80px] top-0 bottom-0 w-[120px] h-[100%] overflow-visible pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="text-yellow-400 text-2xl sm:text-3xl absolute"
                initial={{
                  y: 120 + i * 25,
                  x: 0,
                  opacity: 0.9,
                  rotate: 0,
                }}
                animate={{
                  y: [-100, 150],
                  x: [0, 20, -15, 10, -10, 0],
                  rotate: [0, 15, -15, 10, -10, 0],
                  opacity: [1, 1, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 7 + i,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeInOut",
                }}
              >
                <FaBitcoin className="drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>




      <section id="dashboard" className="max-w-6xl mx-auto w-full px-6 py-12">
        <Dashboard />
      </section>

      <Footer />
    </div>
  );
}
