import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
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

const Expense = mongoose.models.expenses || mongoose.model("expenses", expenseSchema)

export default Expense