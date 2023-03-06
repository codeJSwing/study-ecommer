import express from "express"
const app = express()

// library import
import dotenv from "dotenv"
import bodyParser from "body-parser"
import morgan from "morgan"

// build
dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan("dev"))

// connect port
const port = process.env.PORT || 9000
app.listen(port, console.log("Server started"))
