import express from "express";
import connectDB from "./config/db.js";
import router from "./router/router.js";
import { config } from "dotenv";

const app = express();

app.use(express.json());

config();
connectDB();

const port = process.env.PORT
console.log(port) 

app.use("/api", router);
app.listen(port,()=>{
    console.log("localhost is running")

})








