/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfilePictureModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded-lg shadow-xl"
          >
          <img
  src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
  alt="Full size profile"
  className="w-64 h-64 object-cover rounded-lg"
/>

            <button
              onClick={onClose}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfilePictureModal;

