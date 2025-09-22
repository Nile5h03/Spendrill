import { boolean } from "drizzle-orm/mysql-core";
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: "" }, 
    firsttime:{ type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);