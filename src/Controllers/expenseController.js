import Budget from "../models/Budget.js";
import Expense from "../models/Expense.js";

// ✅ CREATE EXPENSE
export const createExpense = async (req, res) => {
  console.log("Request body:", req.body); 
  try {
// Debugging line to check the request body
    const {  source, amount } = req.body;
    const userId = req.user?.id; // from decode token
    console.log("User ID from token:", userId); // Debugging line to check the user ID
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: User ID not found" });
    }

    const newBudget = new  Budget({
    
      source,
      amount:Number(amount), // Ensure amount is a number
      user: userId, // Associate the expense with the user
    });

    await newBudget.save();
    res.status(201).json({
      message: "Expense added successfully",
      expense: newBudget,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding expense",
      error: error.message,
    });
  }
};

// ✅ GET EXPENSES for a user
export const getExpenses = async (req, res) => {
  try {
    const {userId} = req.params; // Extracting userId from the request parameters
    console.log("Received request for userId in expenses:", userId); // Debugging line to check the user ID

    // if (!userId) {
    //   return res.status(401).json({ message: "Unauthorized: User ID not found" });
    // }
console.log("after userId",userId);
    const expenses = await Budget.findOne({ user: userId });
    console.log("expense",expenses);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

// ✅ UPDATE EXPENSE
export const updateExpense = async (req, res) => {
  try {
    const { name, product, amount } = req.body;
    const { id } = req.params;
    const userId = req.auth?.userId;

    const updated = await Expense.findOneAndUpdate(
      { _id: id, user: userId }, 
      { name, product, amount },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Expense not found or unauthorized" });
    }

    res.status(200).json({ message: "Expense updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

// ✅ DELETE EXPENSE
// DELETE all budgets for the logged-in user
// ✅ DELETE ONE EXPENSE
export const deleteExpense = async (req, res) => {

  
  try {
    const { userId } = req.params;

    const deleted = await Expense.deleteMany({ user: userId });

    if (!deleted) {
      return res.status(404).json({ message: "Expense not found or unauthorized" });
    }

    res.status(200).json({ message: "Expense deleted",  success: true});
  } catch (error) {
    res.status(500).json({ message: "Deletion failed", error: error.message });
  }
};


//  DELETE SINGLE BUDGET  in one tick wala code hai yr ye
//

export const deleteSingleBudget = async (req, res) => {
  try {
    const budgetId = req.params.id;

    const deleted = await Expense.findOneAndDelete({ _id: budgetId });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Budget not found or unauthorized" });
    }
    console.log("Deleted budget:", deleted); // Debugging line to check the deleted budget
    res.status(200).json({ success: true, message: "Budget deleted", deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete", error: error.message });
  }
};
