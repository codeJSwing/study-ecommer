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
        place: req.body.orderPlace,
        desc: req.body.content
    }
    res.json({
        msg: "post new data",
        newOrderInfo: newOrder
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg: "update data"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete date"
    })
})

export default router