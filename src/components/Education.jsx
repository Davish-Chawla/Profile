import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor's Degree - First Year",
    school: "Government Bikram College Of Commerce",
    duration: "2024 - Present",
    description: "Currently pursuing my bachelor's degree while developing my programming skills",
    achievements: "Maintaining good academic standing while completing additional technical courses"
  },
  {
    degree: "Full Stack Development Course",
    school: " Chandigarh Academy Of Digital Learning",
    duration: "6 Months",
    description: "Intensive full-stack web development training program",
    achievements: "Completed multiple projects and learned modern web technologies"
  }
];

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Chandigarh Academy Of Digital Learning",
    date: "2024",
    // link: "#"
    // img: "",
    href:"/Web Developement Certificate.pdf"
  },
  // {
  //   name: "JavaScript Fundamentals",
  //   issuer: "freeCodeCamp",
  //   date: "2023",
  //   link: "#"
  // }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section className="py-20 px-8 bg-gray-900" id="education">
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
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#64FFDA]">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8"
              >
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <div className="text-gray-400 mb-2">
                  <span>{edu.school}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.duration}</span>
                </div>
                <p className="text-gray-400 mb-2">{edu.description}</p>
                <p className="text-[#64FFDA]">{edu.achievements}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#64FFDA]">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={ { scale: 1.02 } }
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <h4 className="font-bold mb-1">{cert.name}</h4>
                  <div className="text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;