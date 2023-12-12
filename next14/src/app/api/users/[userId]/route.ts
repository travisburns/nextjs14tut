import { NextResponse } from "next/server";
import data from "@/data.json"


export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    })
}


