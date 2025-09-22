/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gray-900/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-white px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          About Us
        </h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Budget Buddy was founded with a simple mission: to make financial management accessible and easy for everyone. Our team of finance experts and tech enthusiasts work tirelessly to bring you the best budgeting experience possible.
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We believe that financial freedom starts with understanding and controlling your money. That&lsquo;s why we&lsquo;ve created a platform that not only helps you track your expenses but also provides valuable insights to help you make better financial decisions.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutUs;

