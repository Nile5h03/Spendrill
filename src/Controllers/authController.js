import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, username, email, password, confirmpassword } = req.body;

    // Validation
    if (!name || !username || !email || !password || !confirmpassword) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    if (password.trim() !== confirmpassword.trim()) {
      return res
        .status(400)
        .json({ message: "Passwords do not match", success: false });
    }

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists", success: false });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Generate token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // yaha chnage keya hai mani 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Signup successful",
      data: { name: newUser.name,first:newUser.firsttime, email: newUser.email,userId: newUser._id  },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error",
        success: false,
        error: error.message,
      });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res
        .status(400)
        .json({ message: "Missing credentials", success: false });
    }

    const user = await User.findOne({
      email: usernameOrEmail,
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    //Include token in response
    console.log("user", user._id);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: { name: user.name, email: user.email,first: user.firsttime, userId: user._id },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error",
        success: false,
        error: error.message,
      });
  }
};

// LOGOUT
export const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error",
        success: false,
        error: error.message,
      });
  }
};

// VERIFY

export const verify = async (req, res) => {
  console.log("reached");
  const token = req.cookies?.token;
  console.log("reached", token);
  if (!token) {
    return res
      .status(401)
      .json({ authenticated: false, message: "No token provided" });
  }

  try {
    console.log("inside");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decoded", decoded);
    const user = await User.findOne({
      _id: decoded.id,
    });
    console.log("user",user);
    return res.status(200).json({ authenticated: true, user: user });
  } catch (error) {
    return res
      .status(403)
      .json({ authenticated: false, message: "Invalid token" });
  }
};

// first

export const first = async (req, res) => {
  console.log("reached");
  const {userId} = req.params;

  

  try {
  
    const user = await User.findOne({
      _id: userId,
      
    });
    console.log("user",user);
    if(user.firsttime ){
      user.firsttime = false;
      await user.save();
      return res.status(200).json({ success: true });
    }else{
      return res.status(200).json({ success: false });
    }

  } catch (error) {
    return res
      .status(403)
      .json({ authenticated: false, message: "Invalid token" });
  }
};

// first

