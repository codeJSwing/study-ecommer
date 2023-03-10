import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all data"
    })
})

router.post("/create", (req, res) => {
    const newProduct = {
        name: req.body.productName,
        price: req.body.productPrice,
        qty: req.body.productQty
    }

    res.json({
        msg: "post new data",
        newProductInfo: newProduct
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg: "update data"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete data"
    })
})

export default router