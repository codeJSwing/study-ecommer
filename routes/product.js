// 1.
import express from "express";
const router = express.Router()

// product를 조회하는 API
router.get("/", (req, res) => {
    res.json({
        msg : "get all products"
    })
})

// product를 추가해주는 API
router.post("/create", (req, res) => {
    const newProduct = {
        name: req.body.newProductName,
        price: req.body.productPrice,
        desc: req.body.content
    }
    res.json({
        msg : "create a product",
        productInfo : newProduct
    })
})

// product를 수정하는 API
router.put("/update", (req, res) => {
    res.json({
        msg : "update a product"
    })
})

// product를 삭제해주는 API
router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete a product"
    })
})

export default router