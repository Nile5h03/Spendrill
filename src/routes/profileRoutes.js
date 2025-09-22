import express from "express";
import { getProfile, updateProfile } from "../controllers/profileController.js";
import { authenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", authenticated, getProfile);
router.post("/update", authenticated, updateProfile);

export default router;
