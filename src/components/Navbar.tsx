import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-[#0A192F]/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA] to-[#4BC0C0] rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
            <div className="absolute inset-0 bg-[#0A192F] rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6 flex items-center justify-center">
              <span className="text-[#64FFDA] font-bold text-xl">YD</span>
            </div>
          </div>
          <span className="text-[#64FFDA] font-bold text-xl hidden sm:block">
            Your Dev
          </span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-[#64FFDA]'
                  : 'text-gray-400 hover:text-[#64FFDA]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-[#64FFDA]/10 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA] hover:bg-[#64FFDA]/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        <motion.button
          className="block md:hidden relative w-10 h-10 focus:outline-none"
          whileTap={{ scale: 0.95 }}
          onClick={() => {}}
        >
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="block w-5 h-0.5 bg-[#64FFDA] mb-1.5" />
            <span className="block w-8 h-0.5 bg-[#64FFDA] mb-1.5" />
            <span className="block w-5 h-0.5 bg-[#64FFDA] ml-3" />
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;