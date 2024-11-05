import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const authorization =req.headers.get('authorization')
       
    const data = {
        name: 'John',
        age: 30
    }

    if (!authorization) {    
        return NextResponse.json({error: 'No Header'}, {status:500})
    }

    if (authorization != process.env.API_KEY) {
        return NextResponse.json({error: 'wrong password'}, {status:400})
    }

    else return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
}