'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppContactIcon() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 3000); 
    }, 10000); // Highlight every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="relative flex items-center gap-2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-secondary hover:bg-secondary/80 text-white px-3 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
          onClick={() => {
            window.open('https://wa.me/971505055886', '_blank');
          }}
        >
          <FaWhatsapp size={20} />
        </motion.button>

        {/* Text animation */}
        <AnimatePresence>
          {(isHighlighted || false) && (
            <motion.div
              className="absolute -left-32 bg-white text-secondary px-2 py-1 rounded-lg shadow-md font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              Chat with us!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
