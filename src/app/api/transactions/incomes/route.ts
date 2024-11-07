import {connect} from "@/db/dbConfig"
import Incomes from "@/models/incomeModel"
import { NextRequest, NextResponse } from "next/server"

connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {category, amount, date, payment, note} = reqBody

        const newIncome = new Incomes ({
            category,
            amount,
            date,
            payment,
            note
        })

        const savedIncome = await newIncome.save();

        return NextResponse.json({
            message: "Income saved",
            success: true,
            savedIncome
        }, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message, message: "probably wrong body"}, {status: 500})
    }
}

export async function GET(request:NextRequest) {

    try {
        const authorization = request.headers.get('authorization')
       

    const data = await Incomes.find({})

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