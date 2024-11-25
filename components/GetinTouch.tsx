'use client'
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-sans"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <p className="font-medium tracking-wide">CONNECT WITH US</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Our Mission is to{" "}
              <span className="text-secondary-foreground font-normal">
                Deliver Excellence with Precision
              </span>
            </h2>
            <hr className="border-secondary-foreground mt-4" />
            <p className="text-xs font-light font-mono">
              Looking for our services in the UAE? Reach out to us to discuss your needs.
            </p>
          </div>
          <motion.button
      className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
            onClick={() => {
                window.open("https://wa.me/971505055886", "_blank");
              }}
          >
        <FaWhatsapp size={20} />
        WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
