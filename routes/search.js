import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg : "get all searching"
    })
})

router.post("/create", (req, res) => {
    res.json({
        msg : "create new searching object"
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg : "update objects"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete objects"
    })
})

export default router