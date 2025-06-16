import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Full Stack Development Course",
    role: "Student Developer",
    duration: "6 Months",
    description: [
      "Completed intensive 6-month full-stack development bootcamp alongside first year college studies",
      "Developed multiple projects using MERN stack technologies",
      "Collaborated with peers on team projects and presentations",
      "Achieved excellent grades in both theoretical and practical assessments"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js"]
  },
  {
    company: "College Projects",
    role: "Student Developer",
    duration: "First Year",
    description: [
      "Actively participated in college coding competitions and hackathons",
      "Built responsive websites for college events",
      "Learned and implemented modern web development practices",
      "Balanced academic studies with practical coding projects"
    ],
    tech: ["HTML/CSS", "JavaScript", "Git", "Bootstrap"]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-8" id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true } }
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12"
        >
          Learning Journey
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-[#64FFDA]"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#64FFDA]">{exp.role}</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.duration}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={ { x: 5 } }
                    className="flex items-start space-x-2 text-gray-400"
                  >
                    <span className="text-[#64FFDA] mt-1">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#64FFDA]/10 text-[#64FFDA] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;