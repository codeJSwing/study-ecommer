import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "get all product"
    })
})

router.post("/create", (req, res) => {
    const newProduct = {
        name: req.body.productName,
        price: req.body.productPrice,
        desc: req.body.content
    }

    res.json({
        msg: "create new product",
        productInfo: newProduct
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg: "update a product"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete products"
    })
})

export default router