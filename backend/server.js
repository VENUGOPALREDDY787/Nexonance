import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());

const start = async ()=>{
    // const connectDB= await mongoose.connect(process.env.MONGO_URI);


    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
start();