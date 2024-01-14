import getServerClient from "@/db/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const supabase = getServerClient()

    await supabase.auth.signOut()

    return NextResponse.redirect(`${requestUrl.origin}/login`, {
        status: 301,
    })
}
