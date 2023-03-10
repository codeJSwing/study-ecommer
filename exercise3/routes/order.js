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
        time: req.body.orderTime
    }

    res.json({
        msg: "post a data",
        orderInfo: newOrder
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg: "update a data"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete a data"
    })
})

export default router