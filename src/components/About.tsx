import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-8" id="about">
      <motion.div
        initial={ { y: 20, opacity: 0 } }
        whileInView={ { y: 0, opacity: 1 } }
        transition={ { duration: 0.8 } }
        viewport={ { once: true } }
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-400">
              Hello! I'm Davish Chawla, an aspiring web developer currently in my first year of college. My journey in web development began with an intensive 6-month full-stack development course, where I discovered my passion for creating innovative digital solutions.
            </p>
            <p className="text-gray-400">
              During my course, I gained hands-on experience with modern web technologies and completed several projects that helped me understand the full development lifecycle. I'm particularly proud of balancing this technical training alongside my regular college studies.
            </p>
            <p className="text-gray-400">
              When I'm not coding or studying, I enjoy staying updated with the latest tech trends, participating in coding challenges, and contributing to the developer community through online forums. I'm excited about the opportunity to apply my skills in real-world projects.
            </p>
            <p className="text-gray-400">
              Here are the key technologies I've learned and worked with:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'].map(
                (tech, index) => (
                  <motion.li
                    key={index}
                    whileHover={ { x: 5 } }
                    className="flex items-center space-x-2"
                  >
                    <span className="text-[#64FFDA]">▹</span>
                    <span>{tech}</span>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          <motion.div
            whileHover={ { scale: 1.05 } }
            className="relative"
          >
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-[#64FFDA] rounded-lg opacity-20"></div>
              <img
                src="IMG-20250603-WA0035[1].jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;