import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all orders"
    })
})

router.post("/", (req, res) => {
    const newOrder = {
        name: req.body.orderName,
        price: req.body.orderPrice,
        desc: req.body.content
    }
    res.json({
        msg: "create new order",
        orderInfo: newOrder
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