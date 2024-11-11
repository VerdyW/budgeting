import React, {useState} from 'react'
import axios from 'axios';

const transfer = () => {

    const initialsState = {
        from: "",
        to: "",
        amount: "",
        note: ""
    }

    const [itemArray, setItemArray] = useState(initialsState);

    const handleFormSubmit = async () => {
        if (!itemArray.from || !itemArray.to || !itemArray.amount) {
            alert("Please fill all the fields");
            return;
        }

        const response = await axios.post('/api/transactions/transfers', itemArray)

        if (response.data.success === true) {
            alert("Save successful");
        }

        else {
            alert("Failed To Save");
            console.log(response.data.message);
        }
        
    };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-screen p-6 gap-16 sm:p-12 max-sm:gap-8">

        <h1 className='self-center text-3xl font-bold mb-4'>Transfer</h1>

        <div className='grid grid-cols-2 w-full h-full gap-4'>
            <div className='flex flex-col justify-center w-full h-full gap-2'>
                <label htmlFor='From'>From</label>
                <select
                className='p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600'
                id='From'
                value={itemArray.from}
                onChange={(e) => {setItemArray({...itemArray, from: e.target.value})}}
                >
                    <option value="">Select a Payment</option>
                    <option value="BCA">BCA</option>
                    <option value="JAGO">JAGO</option>
                    <option value="JENIUS">JENIUS</option>
                </select>
            </div>

    
            
            <div className='flex flex-col justify-center w-full h-full gap-2'>

                <label htmlFor='To'>To</label>
                <select
                className='p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600'
                id='To'
                value={itemArray.to}
                onChange={(e) => {setItemArray({...itemArray, to: e.target.value})}}
                >
                    <option value="">Select a Category</option>
                    <option value="BCA">BCA</option>            
                    <option value="JAGO">JAGO</option>
                    <option value="JENIUS">JENIUS</option>
                </select>
            </div>
        </div>

        <label className="text-Primary-950" htmlFor="Amount">Amount</label>
        <input
        className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600"
        id="Amount"
        type="number"
        value={itemArray.amount}
        onChange={(e) => {setItemArray({...itemArray, amount: e.target.value})}}
        />

        <label className="text-Primary-950" htmlFor="Note">Note</label>
        <textarea
         className="p-2 border border-gray-300 rounded-lg mb-4 w-full h-28 break-words focus:outline-none active:border-gray-600"
         id="note"
         value={itemArray.note}
         onChange={(e) => {setItemArray({...itemArray, note: e.target.value})}}
        />

        <button
            onClick={handleFormSubmit}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-2xl">Add Transfer
        </button>
        
    </div>
  )
}

export default transfer