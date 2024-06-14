import {NextResponse} from "next/server"
import {PrismaClient} from "@repo/db/client"

const client = new PrismaClient();

export const GET = async()=>{
    const res = await client.user.findMany()
    return NextResponse.json({
        data: res
    })
}
