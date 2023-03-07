// import framework
import express from "express"
const app = express()

// import library
import dotenv from "dotenv"
import morgan from "morgan"
import bodyParser from "body-parser"
import mongoose from "mongoose";

// router


// DB connection
const dbAddress = process.env.MONGODB_URL
mongoose
    .connect(dbAddress)
    .then(() => console.log("Mongo DB Connected"))
    .catch(err => console.log(err.message))

// library setting
dotenv.config()
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// port
const port = process.env.PORT || 9000
app.listen(port, console.log("Server started"))

