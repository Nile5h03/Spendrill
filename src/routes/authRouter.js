import express from 'express'
import {login,signup,logout,verify,first} from "../controllers/authController.js"
const authRouter=express.Router();
authRouter.post("/signup",signup);
authRouter.post("/login",login);
authRouter.get("/logout",logout);
authRouter.get("/verify",verify);
authRouter.get("/first/:userId",first);
export default authRouter;