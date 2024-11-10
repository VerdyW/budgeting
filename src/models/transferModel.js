import mongoose from "mongoose"

const transferSchema = mongoose.Schema({
    from: String,
    to: String,
    amount: Number,
    date: String,
    note: String,
})

const Transfer = mongoose.models.transfers || mongoose.model("transfers", transferSchema)

export default Transfer