import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import productRouter from "./routes/product.js"
import orderRouter from "./routes/order.js"
import morgan from "morgan"
import mongoose from "mongoose";

const dbAddress = "mongodb+srv://imlogic20:cho1234@cluster0.h4zcfup.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect(dbAddress)
    .then(() => console.log("Mongo DB Connected"))
    .catch(err => console.log(err.message))

const app = express()
dotenv.config()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/product", productRouter)
app.use("/order", orderRouter)


const port = process.env.PORT || 9000
app.listen(port, console.log("서버 started"))


