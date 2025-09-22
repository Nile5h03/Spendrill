
import mongoose from "mongoose";

const butgetSchema = new mongoose.Schema({
      user:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
      },
      source:{
            type : String,
            
            // enum : ["Food", "Transport", "Entertainment", "Bills", "Other"],
            default : "Other"
      },
      amount:{
            type : Number,
            required : true,
            min : [0, "Amount must be a positive number"]
      },
      note:{
            type : String,
            trim : true,
            default : ""
      } ,
      currency:{
            type : String,
            default : "INR"
      }
},{
      timestamps : true // createdAt, updatedAt fields auto-managed karne ke liye karte hai 
})

butgetSchema.index({ user: 1, createdAt: -1 }) // Efficient querying by user & recent expenses or sahi hai 

const Budget = mongoose.model("Budget", butgetSchema) // Budget model bana diya
      
export default Budget // Budget model ko export kar diya 