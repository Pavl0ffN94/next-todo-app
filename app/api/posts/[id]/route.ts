import { NextResponse } from "next/server"
import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'

export async function DELETE(req:Request, {params}:{params:{id:string}}) {
    const id = params.id
    // redirect('/blog')

    const headerList = headers()
    const type = headerList.get('Content-Type')

    const cookiesList= cookies()
    const coo1 = cookiesList.get('Cookie_1')?.value

    return NextResponse.json({id, type, coo1})
}