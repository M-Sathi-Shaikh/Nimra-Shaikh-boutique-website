import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C8A97E] uppercase tracking-[4px] mb-4">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Fashion Collection
          </h2>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[30px] shadow-lg group"
            >
              <img
                src={image}
                alt="Fashion Design"
                className="h-[400px] w-full object-cover group-hover:scale-110 duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;