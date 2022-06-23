import mongoose from "mongoose";

const ProductDataSchema = new mongoose.Schema({
    title: String,
    quant: Number,
    repor: Boolean
})

export default mongoose.model('products', ProductDataSchema)