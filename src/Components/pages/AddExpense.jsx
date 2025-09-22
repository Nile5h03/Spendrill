/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";


const AddExpense = ({ addExpense }) => {
  const [form, setForm] = useState({ title: "", amount: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.amount && form.date) {
      addExpense(form);
      setForm({ title: "", amount: "", date: "" }); // Reset form after submit
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
};

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <ul className="space-y-4">
        {expenses.map((expense, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{expense.title}</h3>
            <p>Amount: ₹{expense.amount}</p>
            <p>Date: {expense.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <AddExpense addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
