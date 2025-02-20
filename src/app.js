import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./route/auth.route.js";


const app = express();
connectDB();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use('/test', (req, res)=>{
    res.send('Hello from backend')
})

export default app;
