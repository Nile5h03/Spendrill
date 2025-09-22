import  { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartPie, FaPlus } from "react-icons/fa";
import BudgetTable from "./BudgetTable";
import BudgetChart from "./BudgetChart";
import AddBudgetModal from "../pages/AddBudgetModalbhai";
import toast from "react-hot-toast";

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); // <-- added loading state

  useEffect(() => {
    const fetchBudgets = async () => {
      setLoading(true); // start loading
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("authToken");

        const res = await fetch(
          `http://localhost:3000/api/budgets/user/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        if (data) {
          const transformed = data.map((b) => ({
            id: b._id,
            category: b.product,
            allocated: b.amount,
            spent: Math.floor(b.amount * 0.7),
          }));
          setBudgets(transformed);
        } else {
          setBudgets([]);
        }
      } catch (err) {
        console.error("Error fetching budgets:", err.message);
      } finally {
        setLoading(false); // end loading
      }
    };

    fetchBudgets();
  }, []);

  const toggleChart = () => setShowChart(!showChart);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDelete = async (budgetId) => {
    if (!window.confirm("Are you sure you want to delete this budget item?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/expenses/${budgetId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.success) {
        setBudgets((prev) => prev.filter((item) => item.id !== budgetId));
        toast.success("Budget deleted successfully!");
      } else {
        console.error("Failed to delete budget item");
      }
    } catch (err) {
      console.error("Error deleting budget item:", err.message);
    }
  };

  const deleteAllBudgets = async () => {
    const userId = localStorage.getItem("userId");
    if (!window.confirm("Are you sure you want to delete all budgets?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/expenses/user/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.success) {
        setBudgets([]);
        toast.success("All budgets deleted!");
      } else {
        console.error("Failed to delete budgets");
      }
    } catch (err) {
      console.error("Error deleting all budgets:", err.message);
    }
  };

  const addBudget = async (newBudget) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("authToken");

      const res = await fetch("http://localhost:3000/api/budgets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...newBudget, user: userId }),
      });

      const data = await res.json();
      if (data.success) {
        const addedBudget = {
          id: data.budget._id,
          category: data.budget.product,
          allocated: data.budget.amount,
          spent: Math.floor(data.budget.amount * 0.7),
        };
        setBudgets((prev) => [...prev, addedBudget]);
        toast.success("Budget added!");
      }
    } catch (err) {
      console.error("Error adding budget:", err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Budget Overview
        </motion.h1>
        <div className="flex flex-wrap gap-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleChart}
            className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center"
          >
            <FaChartPie className="mr-2" />
            {showChart ? "Show Table" : "Show Chart"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="bg-green-500 text-white py-2 px-4 rounded-full flex items-center"
          >
            <FaPlus className="mr-2" />
            Add Budget
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={deleteAllBudgets}
            className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center"
          >
            <FaPlus className="mr-2" />
            Delete All
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.p
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 text-lg"
          >
            Loading budgets...
          </motion.p>
        ) : budgets.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 text-lg"
          >
            No budgets found. Add one!
          </motion.p>
        ) : showChart ? (
          <motion.div
            key="chart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <BudgetChart budgets={budgets} />
          </motion.div>
        ) : (
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <BudgetTable budgets={budgets} handleDelete={handleDelete} />
          </motion.div>
        )}
      </AnimatePresence>

      <AddBudgetModal
        isOpen={showModal}
        onClose={closeModal}
        onAdd={addBudget}
      />
    </motion.div>
  );
};

export default Budget;
