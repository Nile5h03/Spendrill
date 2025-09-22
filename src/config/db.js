import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://8800Sumit:9560Navneet@cluster0.hahn6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
}
 export default connectDB;