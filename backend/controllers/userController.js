import bcrypt from "bcrypt";
import Profile from "../models/profileModels.js";
import User from "../models/userModels.js";

export const register = async(req,res,next) => {
    try {

        const {name, username, email, password} = req.body;

        if(!name || !username || !email || !password){

            return res.status(400).json({message: "All fields are required"});

        }

        const user = await User.findOne({email});

        if(user){
            return res.status(409).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const profile = new Profile({userId: newUser._id});
        
        await profile.save();

        return res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}