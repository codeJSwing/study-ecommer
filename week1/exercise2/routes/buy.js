// 1. import & router const
import express from "express"
const router  = express.Router()

// 2. write HTTP Method
router.get("/", (req, res) => {
    res.json({
        message : "get all buying"
    })
})

router.post("/create", (req, res) => {
    const newBuying = {
        title : req.body.buyingTitle,
        price : req.body.buyingPrice,
        desc : req.body.content
    }

    res.json({
        message : "create new object",
        buyingInfo : newBuying
    })
})

router.put("/update", (req, res) => {
    res.json({
        message : "update objects"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        message: "delete objects"
    })
})

// 3. export router
export default router