import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 🔄 Make sure User model exists and is correctly named
    required: true
  },
  
  product: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: [0, 'Amount must be a positive number'] // 🔒 Extra validation
  },
  category: {
    type: String,
    
    default: "Other"
  },
  note: {
    type: String,
    trim: true,
    default: "" // ✨ Optional but helps avoid `undefined`
  },
  currency: {
    type: String,
    default: "INR"
  },
  
}, {
  timestamps: true // ✅ createdAt, updatedAt fields auto-managed
});

// 📌 Index for efficient querying by user & recent expenses
expenseSchema.index({ user: 1, createdAt: -1 });

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
