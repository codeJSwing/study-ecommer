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
        desc: req.body.content
    }

    res.json({
        msg: "post new data",
        productInfo: newProduct
    })
})

router.put("/update", (req, res) =>{
    res.json({
        msg: "update a data"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete data"
    })
})

export default router