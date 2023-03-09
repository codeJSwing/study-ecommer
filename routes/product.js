import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all data"
    })
})

router.get("/:id", (req, res) => {
    res.json({

    })
})

router.post("/", (req, res) => {
    const newProduct = {
        name: req.body.productName,
        price: req.body.productPrice,
        desc: req.body.content
    }
    res.json({
        msg: "create new data",
        productInfo: newProduct
    })
})

router.put("/", (req, res) => {
    res.json({
        msg: "update data"
    })
})

router.delete("/", (req, res) => {
    res.json({
        msg: "delete data"
    })
})

export default router