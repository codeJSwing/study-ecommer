// import
import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express()

// setting
dotenv.config()
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// DB connection
const dbAddress = process.env.MONGODB_URL
mongoose
    .connect(dbAddress)
    .then(_ => console.log("Mongo DB connected"))
    .catch(err => console.log(err.message))

// port
const port = process.env.PORT
app.listen(port, console.log("Server started"))