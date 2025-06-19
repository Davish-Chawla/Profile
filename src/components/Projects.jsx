import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Foodie Hub',
    description: 'Order meals easily from local restaurants, customize dishes, track delivery in real time, and pay securely—all with a fast and responsive React + Node.js app',
    tech: ['React'],
    image: '/Foodie.png',
    link: 'https://foodie-eo8h.vercel.app/',
  },

    {
    title: 'Todo List',
    description: 'A React-built task manager with add/delete/edit tasks, mark as complete, due dates, categories, reorderable lists, and responsive design.',
    tech: ['React'],
    image: '/Todo.png',
    link: 'https://todo-list-gold-pi.vercel.app/',
  },

  //   {
  //   title: 'Project 3',
  //   description: 'Description of project 3',
  //   tech: ['React', 'Node.js', 'MongoDB'],
  //   image: 'project1.jpg',
  //   link: '#',
  // },
];

const Projects = () => {
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
  const openProject = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-8" id="projects">
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
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 20px rgba(100, 255, 218, 0.1)"
              }}
              className="bg-gray-800 rounded-lg overflow-hidden transform-gpu"
               onClick={() => openProject(project.link)}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#64FFDA] bg-opacity-10 text-[#64FFDA] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;