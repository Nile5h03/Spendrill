import User from "../models/User.js";
import path  from "path" // ye ham is leye use karte hai 


export const getProfile = async (req, res)=> {
      try{
            const userId  = req.user.id; //Assumig jwt decode user
            const user = await User.findById(userId).select("-password");
            res.json(user);

      }catch(err){
            res.status(500).json({ message: "Error fetching profile" });
      }
};

export const updateProfile = async (req, res) => {
      try {
        const userId = req.user.id;
        let imagePath;
    
        if (req.files?.profileImage) {
          const file = req.files.profileImage;
          const uploadPath = path.join("uploads", file.name);
          await file.mv(uploadPath);
          imagePath = `/uploads/${file.name}`;
        }
    
        const updatedData = {
          name: req.body.name,
          email: req.body.email,
        };
    
        if (imagePath) updatedData.profileImage = imagePath;
    
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password");
        res.json(user);
      } catch (err) {
        res.status(500).json({ message: "Error updating profile" });
      }
    };