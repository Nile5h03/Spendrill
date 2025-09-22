import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRouter.js";
import expenseRoutes from "./src/routes/expenseRoutes.js";
import cookieParser from "cookie-parser";
import budgetRoutes from "./src/routes/budgetRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";




dotenv.config();

const app = express();
app.use(cookieParser());
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/profile", profileRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


export default app;
