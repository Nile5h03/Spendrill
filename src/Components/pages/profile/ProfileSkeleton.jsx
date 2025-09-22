/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ProfileSkeleton = () => {
  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-24 h-24 rounded-full mx-auto bg-gray-200"
        />
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-6 w-3/4 mx-auto mt-4 bg-gray-200 rounded"
        />
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-4 w-1/2 mx-auto mt-2 bg-gray-200 rounded"
        />
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-4 w-2/3 mx-auto mt-2 bg-gray-200 rounded"
        />
      </div>
      <div className="mt-6 space-y-4">
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-full bg-gray-200 rounded"
        />
        <motion.div
          animate={{ backgroundColor: ['#f0f0f0', '#e0e0e0', '#f0f0f0'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-full bg-gray-200 rounded"
        />
      </div>
    </div>
  );
};

export default ProfileSkeleton;

