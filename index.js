// framework import
import express from "express"
const app = express()

// library import
import dotenv from "dotenv"
import morgan from "morgan"
import bodyParser from "body-parser"

// library setting
dotenv.config()
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// DB connection


// port
const port = process.env.PORT || 9000
app.listen(port, console.log("Server started"))