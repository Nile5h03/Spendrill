/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-100 opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: Math.random() * 50 - 25,
            y: Math.random() * 50 - 25,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedBackground;

