/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const handlePaytmRedirect = (plan) => {
    // Redirect to Paytm payment gateway or trigger Paytm integration logic
    alert(`Redirecting to Paytm for ${plan} plan`);
    // Replace this with the actual Paytm payment gateway logic
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gray-900/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-white px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Basic",
              price: "$0",
              features: [
                "Basic Budgeting",
                "Expense Tracking",
                "Limited Insights",
              ],
            },
            {
              title: "Pro",
              price: "$9.99",
              features: [
                "Advanced Budgeting",
                "Detailed Insights",
                "Goal Setting",
                "Bill Reminders",
              ],
            },
            {
              title: "Enterprise",
              price: "Custom",
              features: [
                "All Pro Features",
                "Dedicated Support",
                "Custom Integrations",
                "Team Management",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-8 rounded-lg shadow-lg flex flex-col cursor-pointer"
              onClick={() => handlePaytmRedirect(plan.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
