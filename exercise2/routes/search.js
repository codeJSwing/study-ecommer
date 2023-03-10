import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg : "get all searching"
    })
})

router.post("/create", (req, res) => {
    const newSearching = {
        name: req.body.personName,
        where: req.body.searchingPlace,
        desc: req.body.content
    }
    res.json({
        msg : "create new searching object",
        searchingInfo: newSearching
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