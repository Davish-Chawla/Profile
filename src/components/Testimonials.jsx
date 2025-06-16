import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    content: 'Excellent work ethic and delivered beyond expectations.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    content: 'A pleasure to work with, highly skilled and professional.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    content: 'Brings creative solutions to complex problems.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Testimonials = () => {
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
    <section className="py-20 px-8 bg-gray-900" id="testimonials">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center"
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(100, 255, 218, 0.1)"
              }}
              className="bg-gray-800 p-6 rounded-lg transform-gpu"
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-[#64FFDA] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
              <p className="text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;