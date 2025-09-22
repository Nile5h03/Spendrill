/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddBudgetModalbhai = ({ isOpen, onClose, onAdd }) => {
  const [category, setCategory] = useState('');
  const [allocated, setAllocated] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onAdd({ category, allocated: parseFloat(allocated), spent: 0 });
    setCategory('');
    setAllocated('');
  };

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
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Add New Budget</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="allocated" className="block text-sm font-medium text-gray-700">
                  Allocated Amount
                </label>
                <input
                  type="number"
                  id="allocated"
                  value={allocated}
                  onChange={(e) => setAllocated(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Budgets
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddBudgetModalbhai;

