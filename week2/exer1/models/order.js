import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    product: String,
    quantity: Number
})

const orderModel = mongoose.model("Order", orderSchema)
export default orderModel