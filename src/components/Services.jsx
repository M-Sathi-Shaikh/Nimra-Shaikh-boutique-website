import { motion } from "framer-motion";
import {
  FaCut,
  FaFemale,
  FaTshirt,
  FaMagic,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCut />,
      title: "Custom Stitching",
      desc: "Perfectly tailored outfits designed according to your style and measurements.",
    },
    {
      icon: <FaFemale />,
      title: "Bridal Dresses",
      desc: "Elegant bridal wear with luxurious stitching and modern detailing.",
    },
    {
      icon: <FaTshirt />,
      title: "Party Wear",
      desc: "Stylish dresses for parties, weddings, and special occasions.",
    },
    {
      icon: <FaMagic />,
      title: "Alterations",
      desc: "Professional alteration services for perfect fitting and finishing.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C8A97E] uppercase tracking-[4px] mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Premium Tailoring Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[30px] shadow-lg hover:-translate-y-3 duration-300"
            >
              <div className="text-5xl text-[#C8A97E] mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;