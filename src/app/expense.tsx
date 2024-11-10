import React, { useState } from 'react'
import axios from 'axios'



export default function expense() {
    
    
  const initialstateExpense = {
    category: "",
    amount: "",
    date: "",
    payment: "",
    note: ""
  }

  const [itemArray, setItemArray] = useState(initialstateExpense)

  const handleFormSubmit = async () => {

    if (!itemArray.category || !itemArray.amount || !itemArray.date || !itemArray.payment) {
        alert("Please fill all the fields");
        return;
    }

    const response = await axios.post('/api/transactions/expenses', itemArray)

    if (response.data.success === true) {
        alert("Saved Successfully");
    }

    else {
        alert("Failed To Save");
        console.log(response.data.message);
    }
    
};

    return (
        <div className="flex flex-col justify-center w-full h-full gap-2">
            <h1 className='self-center text-3xl font-bold'> Expense</h1>
            <label className="text-Primary-950" htmlFor="Category">Category</label>

            <select
            className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600"
            id="Category"
            value={itemArray.category}
            onChange={(e) => {setItemArray({...itemArray, category: e.target.value})}}
            >
            <option value="">Select a Category</option>
            <option value="Food And Beverage">Food And Beverage</option>
            <option value="Transport">Transport</option>
            <option value="Netflix">Subscription</option>
            <option value="Netflix">Entertainment</option>
            <option value="Spotify">Shopping</option>
            </select>

            <label className="text-Primary-950" htmlFor="Amount">Amount</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600"
            id="Amount"
            type="number"
            value={itemArray.amount}
            onChange={(e) => {setItemArray({...itemArray, amount: e.target.value})}}
            />

            <label className="text-Primary-950" htmlFor="date">Date</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600"
            id="date"
            type="datetime-local"
            value={itemArray.date}
            onChange={(e) => {setItemArray({...itemArray, date: e.target.value})}}
            >
            </input>

            <label className="text-Primary-950" htmlFor="payment">Payment</label>
            <select
            className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600"
            id="payment"
            value={itemArray.payment}
            onChange={(e) => {setItemArray({...itemArray, payment: e.target.value})}}>
            <option value="">Select a Payment</option>
            <option value="Cash">Cash</option>
            <option value="BCA">BCA</option>
            <option value="JAGO">JAGO</option>
            <option value="JENIUS">JENIUS</option>
            </select>
            <label className="text-Primary-950" htmlFor="note">Note</label>
        
            <textarea
            className="p-2 border border-gray-300 rounded-lg mb-4 w-full h-28 break-words focus:outline-none active:border-gray-600"
            id="note"
            value={itemArray.note}
            onChange={(e) => {setItemArray({...itemArray, note: e.target.value})}}
            />
    
        
          <button
                onClick={handleFormSubmit}
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-2xl">Add Expense</button>
        </div>

    )
}