import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());



const start = async ()=>{
    const connectDB= await mongoose.connect(process.env.MONGO_URI);

}
start();
app.use(postRoutes);
app.use(userRoutes);
app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
});

