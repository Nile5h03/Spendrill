/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const ProfileCompletionBar = ({ user }) => {
  const calculateCompletion = () => {
    let completed = 0;
    if (user?.fullName) completed++;
    if (user?.emailAddresses?.length > 0) completed++;
    if (user?.profileImageUrl) completed++;
    // Add more conditions as needed
    return (completed / 3) * 100; // Assuming 3 is the total number of fields
  };

  const completion = calculateCompletion();

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-700 mb-1">Profile Completion</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${completion}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{completion.toFixed(0)}% Complete</p>
    </div>
  );
};

export default ProfileCompletionBar;

