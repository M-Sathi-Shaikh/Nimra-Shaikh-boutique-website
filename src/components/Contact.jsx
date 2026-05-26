import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-[#C8A97E] uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Book Your Appointment
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Contact Nimra Shaikh for custom stitching, bridal wear,
          party dresses, and elegant fashion tailoring services.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WhatsApp */}
          <div className="bg-[#f8f5f2] p-8 rounded-[30px] shadow-lg">
            <FaWhatsapp className="text-5xl text-green-500 mx-auto mb-4" />

            <h3 className="text-2xl font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-600 mb-4">
              Chat directly for bookings.
            </p>

            <a
              href="https://wa.me/923337593353"
              target="_blank"
              className="text-[#C8A97E] font-semibold"
            >
              Message Now
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-[#f8f5f2] p-8 rounded-[30px] shadow-lg">
            <FaInstagram className="text-5xl text-pink-500 mx-auto mb-4" />

            <h3 className="text-2xl font-semibold mb-2">
              Instagram
            </h3>

            <p className="text-gray-600 mb-4">
              Explore latest fashion designs.
            </p>

            <a
              href="/"
              className="text-[#C8A97E] font-semibold"
            >
              Follow Page
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#f8f5f2] p-8 rounded-[30px] shadow-lg">
            <FaPhone className="text-5xl text-[#C8A97E] mx-auto mb-4" />

            <h3 className="text-2xl font-semibold mb-2">
              Call
            </h3>

            <p className="text-gray-600 mb-4">
              Call for appointments anytime.
            </p>

            <a
              href="tel:+9233337593353"
              className="text-[#C8A97E] font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;