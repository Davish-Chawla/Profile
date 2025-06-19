import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Building Scalable React Applications",
    date: "Oct 2023",
    description: "A comprehensive guide to building large-scale React applications with best practices and performance optimization techniques.",
    tags: ["React", "Performance", "Architecture"],
    readTime: "10 min read",
    link: "#"
  },
    {
    title: "Mastering Responsive Design with Tailwind CSS",
    date: "June 2025",
    description: "Learn how to create fully responsive web designs quickly using the utility-first approach of Tailwind CSS.",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
    readTime: "7 min read",
    link: "#"
  },
];

const Blog = () => {
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
    <section className="py-20 px-8" id="blog">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12"
        >
          Technical Blog
        </motion.h2>
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#64FFDA]">{blog.title}</h3>
                <span className="text-gray-400 text-sm">{blog.date}</span>
              </div>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#64FFDA]/10 text-[#64FFDA] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{blog.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;