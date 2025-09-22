/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const features = [
    {
      title: 'Smart Budgeting',
      description: 'Set personalized budgets and track your spending across multiple categories.',
      icon: '📊'
    },
    {
      title: 'Expense Tracking',
      description: 'Easily log and categorize your expenses with just a few taps.',
      icon: '💸'
    },
    {
      title: 'Financial Insights',
      description: 'Get detailed reports and visualizations of your spending habits.',
      icon: '📈'
    },
    {
      title: 'Goal Setting',
      description: 'Set financial goals and track your progress towards achieving them.',
      icon: '🎯'
    },
    {
      title: 'Bill Reminders',
      description: 'Never miss a payment with customizable bill reminders and notifications.',
      icon: '🔔'
    },
    {
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and protected with bank-level security.',
      icon: '🔒'
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learn More About BudgetBuddy
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Finances?</h3>
          <p className="text-xl mb-8">Join thousands of users who have already improved their financial health with BudgetBuddy.</p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get Started Now
          </Button>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">How BudgetBuddy Works</h3>
          <ol className="list-decimal list-inside space-y-4 text-lg">
            <li>Sign up for a free account and connect your bank accounts securely.</li>
            <li>Set up your budget categories and financial goals.</li>
            <li>Start tracking your expenses and income automatically.</li>
            <li>Receive personalized insights and recommendations to improve your financial health.</li>
            <li>Stay on top of your bills and never miss a payment.</li>
            <li>Watch your savings grow and achieve your financial goals faster than ever!</li>
          </ol>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-xl mb-8">Have more questions? We&lsquo;re here to help!</p>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;

