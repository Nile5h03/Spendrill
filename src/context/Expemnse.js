/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ExpenseContext.js (new file)
import React, { createContext, useState, useContext } from "react";

// Create Context for Expense
const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
