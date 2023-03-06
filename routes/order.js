import express from "express";
const router = express.Router()

router.get("/", (req, res) =>  {
    res.json({
        msg : "get all order"
    })
})

router.post("/create", (req, res) => {
    const newOrder = {
        name : req.body.orderTitle,
        price : req.body.orderPrice,
        count : req.body.orderCount
    }

    res.json({
        msg : "create new order",
        orderInfo : newOrder
    })
})

export default router

