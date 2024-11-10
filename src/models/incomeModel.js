import mongoose from 'mongoose'

const incomeSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'please enter category'],
        unique: false,
    },

    amount: {
        type: Number,
        required: [true, 'please enter email'],
        unique: false,
    },

    date: {
        type: String,
        required: [true, 'please enter password'],
        unique: false,
    },

    payment: {
        type: String,
        required: [true, 'please enter password'],
        unique: false,
    },

    note: String,

})

const Income = mongoose.models.incomes || mongoose.model("incomes", incomeSchema)

export default Income