// import
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    desc: String
})

module.exports = mongoose.model("Product", productSchema)

