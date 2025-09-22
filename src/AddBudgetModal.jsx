// AddBudgetModal.jsx
/* eslint-disable react/prop-types */
import { useState } from "react";

const AddBudgetModal = ({ setShowBudgetModal, onBudgetAdded }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch("http://localhost:3000/api/budgets/add", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          category,
          amount: Number(amount),
        }),
      });
      const data = await res.json();
      onBudgetAdded(data); 
      setShowBudgetModal(false); 
    } catch (error) {
      console.error("Error adding budget:", error.message);
      setShowBudgetModal(false);
    }
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-[90%] md:w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add Budget</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowBudgetModal(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBudgetModal;
