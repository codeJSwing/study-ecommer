import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all order"
    })
})

router.post("/create", (req, res) => {
    const newOrder = {
        title: req.body.orderTitle,
        qty: req.body.orderQty,
        desc: req.body.content
    }

    res.json({
        msg: "post new order",
        orderInfo: newOrder
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg: "update an order"
    })
})

router.delete("/delete", (req, res) =>{
    res.json({
        msg: "delete order"
    })
})

export default router