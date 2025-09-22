import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticated = (req, res, next) => {
     const token = req.cookies?.token;
     
     if(!token) {
          return res.status(401).json({ message: "Unauthorized: No token provided" });
     }

     try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.auth = { userId: decoded.id }; // this will be used in the routes to get the user ID (this matchs your token payload)
      next();
     } catch (error) {
      res.status(403).json({ message: 'Invalid token' });
     }
}