import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-8" id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
            ></textarea>
          </motion.div>
          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 15px rgba(100, 255, 218, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#64FFDA] text-[#0A192F] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;