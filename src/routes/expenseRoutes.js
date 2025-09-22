// src/routes/expenseRoutes.js
import express from 'express';
import { createExpense, getExpenses, updateExpense, deleteExpense,deleteSingleBudget } from '../Controllers/expenseController.js';

import { verifyToken } from '../middlewares/verifyToken.js';
const expenseRoutes = express.Router();

import Expense  from '../models/Expense.js'; 


expenseRoutes.post('/', verifyToken, createExpense);    // Protected route
expenseRoutes.get('/user/:userId', getExpenses); // is mujhe budget milega       // 
expenseRoutes.put('/:id', verifyToken, updateExpense);  // 

expenseRoutes.get('/my', verifyToken, async (req, res) => {
      try {
        const userId = req.user.id; 
    
        const expenses = await Expense.find({ user: userId });
        res.json(expenses);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch expenses", detail: error.message });
      }
    });


    expenseRoutes.delete('/user/:userId', verifyToken, deleteExpense);
    expenseRoutes.delete("/:id", verifyToken, deleteSingleBudget);

    
export default expenseRoutes ;