import express from 'express';	
// 
import Expense from '../models/Expense.js';

const router =  express.Router();

router.post('/add',async (req,res)=>{
      console.log("✅ Received body:", req.body); 
      try {

            
            const {userId, category, amount} = req.body; // Extracting userId, category, and amount from the request body aata hai 

            // buget schema ke according data ko create karna hai ok 
            const newExpense = new Expense({
                  user: userId,
                  product:category,
                
                  amount: Number(amount), // Ensure amount is a number aa raha hai kuki string mai aa raha hai
                
            });
            await newExpense.save(); // Save the new  budget ko database mai save karta hai

            console.log("Creating Expense with:", newExpense);

           res.status(201).json(newExpense); // 201 status code return karta hai jo ki successful creation ko indicate karta hai
      } catch (error) {
            console.error("Error adding buget:", error.message);
            res.status(500).json({error}) // 500 status code return karta hai jo ki server error ko indicate karta hai
      }
});

// ab get karna hai buget ko : Fetch budgets for a user karne ke liye bana rahe hai

router.get('/user/:userId', async (req, res) => {
      console.log("Received request for userId:", req.params.userId);
      try {
        const userExpense = await Expense.find({ user: req.params.userId }).sort({ createdAt: -1 });
        if (userExpense.length === 0) {
            console.log("No budgets found for this user.");
            return res.status(404).json({ message: "No budgets found",suscess: false });
          }
          console.log("Fetched budgets:", userExpense);
          res.status(200).json(userExpense);
      } catch (error) {
        console.error("Error fetching budgets:", error.message);
        res.status(500).json({ error: "Failed to fetch budgets" });
      }
    });


router.delete('/:budgetId', async (req, res) => {


      console.log("Received request to delete all budgets for userId:", req.params.budgetId);

      try {
        const deletedBudgets = await Expense.findOneAndDelete({ _id : req.params.budgetId
 });

        if (deletedBudgets.deletedCount === 0) {
          console.log("No budgets found for this user.");
          return res.status(404).json({ message: "No budgets found", success: false });
        }
        console.log("Deleted budgets:", deletedBudgets);
        res.status(200).json({ message: "budget deleted successfully", success: true });

      } catch (error) {
        console.error("Error deleting budgets:", error.message);
        res.status(500).json({ error: "Failed to delete budgets" });
      }
    });

    
    
export default router; 