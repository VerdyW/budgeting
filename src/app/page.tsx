'use client'

import React, { useState , useEffect} from "react";
import Expense from "./expense";
import Income from "./income"
import Transfer from "./transfer"

export default function Home() {

  const [menu, setMenu] = useState("INCOME");


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-screen p-6 gap-16 sm:p-12 max-sm:gap-8">
      <div className="grid grid-cols-3 gap-4">
        <button className= {`bg-black hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-md ${menu === "INCOME" ? "bg-gray-700" : ""}`} onClick={() => setMenu("INCOME")}>INCOME</button>
        <button className={`bg-black hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-md ${menu === "EXPENSE" ? "bg-gray-700" : ""}`} onClick={() => setMenu("EXPENSE")}>EXPENSE</button>
        <button className={`bg-black hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-md ${menu === "TRANSFER" ? "bg-gray-700" : ""}`} onClick={() => setMenu("TRANSFER")}>TRANSFER</button>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        
        {menu === "INCOME" && <Income/>}  
        {menu === "EXPENSE" && <Expense/>}  
        {menu === "TRANSFER" && <Transfer/>}
     
      </div>
    </div>
  );
}
