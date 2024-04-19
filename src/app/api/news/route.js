import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const prisma = new PrismaClient()

export async function POST(request) {
            
    const res = await request.json()
    const news = await prisma.news.create({
        data : {
            name:res
        }
    })
    console.log("aaaaaaaaaa",news)

    return NextResponse.json(news)
}