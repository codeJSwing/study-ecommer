import express from "express"
import productModel from "../models/product.js"
const router = express.Router()

router.get("/", async(req, res) => {
    try {
        const products = await productModel.find()
        return res.json({
            msg: "successful get products",
            products: products.map(product => ({
                name: product.name,
                price: product.price,
                id: product._id
            }))
        })
    } catch(err) {
        res.status(404).json({
            msg: err.message
        })
    }
})

router.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const product = await productModel.findById(id)
        if(!product){
            return res.json({
                msg: "no data"
            })
        }
        res.json({
            msg: "get data",
            product
        })
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
})

router.post("/", async(req, res) => {
    const {name, price, desc} = req.body

    try{
        const newProduct = new productModel({
            name,
            price,
            desc
        })
        const createProduct = await newProduct.save()
        return res.json({
            msg: "completed product",
            product: createProduct
        })
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
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