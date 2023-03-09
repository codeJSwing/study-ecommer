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
           if(product == null){
               res.json({
                   msg: `no data`
               })
           }
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

router.put("/:id", (req, res) => {
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    productModel
        .findByIdAndUpdate(req.params.id, {$set: updateOps})
        .then(() => {
            res.json({
                msg: `updated product by ${req.params.id}`
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

router.delete("/", (req, res) => {
    productModel
        .deleteMany()
        .then(_ => {
            res.json({
                msg: "successful delete data"
            })
        })
        .catch(err => {
            res.status(404).json({
                msg: err.message
            })
        })
})

router.delete("/:id", (req, res) => {
    productModel
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({
                msg: `successful delete a data`
            })
        })
        .catch(err => {
            res.status(404).json({
                msg: err.message
            })
        })
})

export default router