import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#f8f5f2] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#C8A97E] uppercase tracking-[5px] mb-4">
            Elegant Tailoring
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Timeless <br /> Fashion & <br /> Custom Stitching
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Nimra Shaikh creates beautifully stitched outfits with elegance,
            precision, and modern fashion trends tailored specially for you.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#contact"
              className="bg-[#C8A97E] text-white px-8 py-3 rounded-full hover:bg-black duration-300"
            >
              Book Appointment
            </a>

            <a
              href="#gallery"
              className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white duration-300"
            >
              View Collection
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            alt="Fashion"
            className="rounded-[30px] shadow-2xl object-cover h-[650px] w-full"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-[#C8A97E]">5+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;