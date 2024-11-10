import { NextResponse, NextRequest } from "next/server";
import Transfers from "@/models/transferModel";
import {connect} from "@/db/dbConfig";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { from, to, amount, note } = reqBody;

        const newTransfer = new Transfers({
            from,
            to,
            amount,
            note,
        });

        const savedTransfer = await newTransfer.save();

        return NextResponse.json({
            message: "Transfer saved",
            success: true,
            savedTransfer,
        }, {status: 200});
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, message: "probably wrong body" },
            { status: 500 }
        );
    }

}

export async function GET(request: NextRequest) {

    try {
        const authorization = request.headers.get('authorization')
       

    const data = await Transfers.find({})

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