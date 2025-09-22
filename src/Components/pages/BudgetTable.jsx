/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaTrash } from 'react-icons/fa';

const BudgetTable = ({ budgets, handleDelete }) => {


  const calculateProgress = (spent, allocated) => {
    return (spent / allocated) * 100;
  };

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg">
      <table className="w-full text-left table-auto border-separate space-y-4">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Allocated</th>
            <th className="py-3 px-6">Spent</th>
            <th className="py-3 px-6">Progress</th>
            <th className="py-3 px-6">Action</th> 
          </tr>
        </thead>
        <tbody className="bg-white">
          {budgets.map((budget) => (
            <motion.tr
              key={budget.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="py-4 px-6 text-gray-700">{budget.category}</td>
              <td className="py-4 px-6 text-gray-700">₹{budget.allocated}</td>
              <td className="py-4 px-6 text-gray-700">₹{budget.spent}</td>
              <td className="py-4 px-6">
                <div className="relative pt-1">
                  <div className="flex mb-4 items-center justify-between">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200"
                    >
                      {Math.round(calculateProgress(budget.spent, budget.allocated))}%
                    </motion.span>
                    {budget.spent > budget.allocated ? (
                      <FaExclamationTriangle className="text-red-500" />
                    ) : (
                      <FaCheckCircle className="text-green-500" />
                    )}
                  </div>
                  <div className="flex">
                    <div className="relative flex w-full flex-col">
                      <div className="w-full bg-gray-200 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${calculateProgress(budget.spent, budget.allocated)}%` }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className={`bg-teal-500 h-2 rounded-full ${
                            budget.spent > budget.allocated ? 'bg-red-500' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <button
                  onClick={() => handleDelete(budget.id)}
                  
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
