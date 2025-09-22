import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
 const token = req.cookies?.token; 
 console.log("reached", token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token using your secret key
    req.user = decoded; // Attach decoded token data to request object
    console.log("Decoded token:", req.user); // Debugging line to check token data
    next(); // Call the next middleware
  } catch (err) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};
