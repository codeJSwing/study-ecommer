import express from "express"
import productModel from "../models/product.js"
const router = express.Router()

router.get("/", (req, res) => {
    productModel
        .find()
        .then(products => {
            res.json({
                msg: `successful all products`,
                count: products.length,
                products: products
            })
        })
        .catch(err => {
            res.status(404).json({
                msg: err.message
            })
        })
})

router.get("/:id", (req, res) => {
   productModel
       .findById(req.params.id)
       .then(product => {
           res.json({
               msg: `successful get product ${req.params.id}`,
               product: product
           })
       })
       .catch(err => {
           res.json({
               msg: err.message
           })
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