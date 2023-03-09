import express from "express";
import orderModel from "../models/order.js";
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all orders"
    })
})

router.post("/", (req, res) => {
    const newOrder = new orderModel ({
        product: req.body.orderProduct,
        quantity: req.body.orderquantity
    })
    newOrder
        .save()
        .then(result => {
            res.json({
                msg: "create new order"
                newOrderInfo: {
                    quantity: result.quantity
                }
            })
        })
        .catch(err => {
            res.status(404).json({
                msg: err.message
            })
        })
})

router.put("/", (req, res) => {
    res.json({
        msg: "update a order"
    })
})

router.delete("/", (req, res) => {
    res.json({
        msg: "delete all orders"
    })
})

export default router