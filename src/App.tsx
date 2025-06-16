import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0A192F] text-[#CCD6F6] min-h-screen">
        <Navbar />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Blog />
            <Testimonials />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;