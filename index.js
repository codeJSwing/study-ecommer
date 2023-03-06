import express from "express"
const app = express()

// library import
import dotenv from "dotenv"
import bodyParser from "body-parser"
import morgan from "morgan"

// Router import
import buyRouter from "./routes/buy.js"
import searchRouter from "./routes/search.js"

// build
dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan("dev"))

// router
app.use("/buy", buyRouter)
app.use("/search", searchRouter)

// connect port
const port = process.env.PORT || 9000
app.listen(port, console.log("Server started"))
