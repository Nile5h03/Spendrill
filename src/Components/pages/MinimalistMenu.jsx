/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const MinimalistMenu = ({ onClick }) => {
  return (
    <motion.button
      className="fixed top-4 left-4 z-30 p-2 bg-gray-900 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </motion.button>
  );
};

export default MinimalistMenu;

