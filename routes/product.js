import express from "express"
import productModel from "../models/product.js"
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
    const newProduct = new productModel ({
        name: req.body.productName,
        price: req.body.productPrice,
        desc: req.body.content
    })
    newProduct
        .save()
        .then(result => {
            res.json({
                msg: "create new product",
                newProductInfo: {
                    name: result.name,
                    price: result.price
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
        msg: "update data"
    })
})

router.delete("/", (req, res) => {
    res.json({
        msg: "delete data"
    })
})

export default router