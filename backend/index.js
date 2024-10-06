import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";
import userRoute from './Routes/users.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Api is working")
})

// Database
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB database connected");
    } catch (error) {
        console.log("MongoDB connection failed " + error);
    }
}

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute); 

app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port);
})
