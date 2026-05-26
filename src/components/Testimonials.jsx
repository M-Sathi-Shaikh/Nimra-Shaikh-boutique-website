import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      review:
        "Absolutely amazing stitching quality. The dress fitting was perfect and elegant.",
    },
    {
      name: "Sana Ali",
      review:
        "Nimra designed my bridal outfit beautifully. Highly recommended for luxury tailoring.",
    },
    {
      name: "Minal Ahmed",
      review:
        "Professional work, modern designs, and excellent finishing on every dress.",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C8A97E] uppercase tracking-[4px] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[30px] shadow-lg"
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                "{item.review}"
              </p>

              <h3 className="text-xl font-semibold text-[#C8A97E]">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;