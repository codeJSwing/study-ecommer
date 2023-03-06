import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import productRouter from "./routes/product.js"
import orderRouter from "./routes/order.js"
import morgan from "morgan"

const app = express()
dotenv.config()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/product", productRouter)
app.use("/order", orderRouter)


const port = process.env.PORT || 9000
app.listen(port, console.log("서버 started"))


