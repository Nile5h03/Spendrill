/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

// Card component
export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

// CardHeader component
export const CardHeader = ({ children }) => {
  return <div className="bg-gray-100 p-4">{children}</div>;
};

// CardContent component
export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// CardTitle component
export const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold text-gray-800">{children}</h2>;
};  

// CardDescription component
export const CardDescription = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};
