import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Davish Chawla. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex space-x-6 mt-4 md:mt-0"
        >
          <a
            href="https://github.com/Davish-Chawla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davish-chawla-212659258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/DavishC12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
          >
            Twitter
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;