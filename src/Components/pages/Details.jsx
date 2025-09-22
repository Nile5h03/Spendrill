/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [name, setName] = useState("");
  const [seouce, setSeouce] = useState("");

  const [salary, setSalary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setMessage("");

    const expenseData = {
      name,
      seouce,
      amount: salary,
    };
    console.log("Expense data:", expenseData);

    try {
      const res = await fetch("http://localhost:3000/api/expenses", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setMessage("Expense submitted successfully ✅");
        setName("");
        setSeouce("");

        setSalary("");

        navigate("/dashboard", {
          state: {
            recentExpense: {
              name,
              seouce,

              salary,
            },
          },
        });
      } else {
        setMessage(data.message || "Failed to submit expense.");
      }
    } catch (error) {
      setMessage("Something went wrong. Try again.");
      console.error("Error submitting expense:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome to Budget Buddy
        </h1>

        {message && (
          <div className="mb-4 text-center text-sm text-blue-800">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Source of Income
            </label>
            <input
              type="text"
              value={seouce}
              onChange={(e) => setSeouce(e.target.value)}
              placeholder="Enter product name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Monthly Salary (₹)
            </label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter your monthly salary"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-green-100 border border-green-300 p-4 rounded-xl text-center">
            <p className="text-lg font-medium text-green-700">
              Hi <span className="font-bold">{name}</span>
              <span className="font-bold">{seouce}</span>. Your monthly salary
              is ₹{salary}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
