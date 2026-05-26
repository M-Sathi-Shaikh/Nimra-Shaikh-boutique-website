import { motion } from "framer-motion";
import imgAbout from "../../src/assets/about.jpeg"

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={imgAbout}
            alt="Tailor"
            className="rounded-[30px] shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C8A97E] uppercase tracking-[4px] mb-4">
            About Nimra
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Crafting Elegant Dresses With Passion
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Nimra Shaikh specializes in custom tailoring, bridal wear,
            traditional dresses, and modern fashion stitching. Every outfit is
            designed with attention to detail, premium finishing, and timeless
            elegance.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            From casual wear to luxury formal designs, the goal is to create
            outfits that make every client feel confident and beautiful.
          </p>

          <button className="mt-8 bg-[#C8A97E] text-white px-8 py-3 rounded-full hover:bg-black duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;