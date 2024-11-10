import {connect} from "@/db/dbConfig"
import Expenses from "@/models/expenseModel"
import { NextRequest, NextResponse } from "next/server"

connect();

export async function POST(request :NextRequest) {
 
    try {
        const reqBody = await request.json()
        const {category, amount, date, payment, note} = reqBody
        
        const newExpense = new Expenses ({
            category,
            amount,
            date,
            payment,
            note
        })

        const savedExpenses = await newExpense.save();

        return NextResponse.json({
            message: "Expense saved",
            success: true,
            expense: savedExpenses
        },
        {status: 200})

    } catch (error:any) {
        return NextResponse.json({error: error.message, message: 'probably wrong body'}, {status: 500})
    }
}

export async function GET(request:NextRequest) {

    try {
        const authorization = request.headers.get('authorization')
       

    const data = await Expenses.find({})

    if (!authorization) {    
        return NextResponse.json({error: 'No Header'}, {status:500})
    }

    if (authorization != process.env.API_KEY) {
        return NextResponse.json({error: 'wrong password'}, {status:400})
    }

    else return NextResponse.json({message: data})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
    
}