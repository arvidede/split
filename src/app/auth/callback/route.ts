import getServerClient from "@/db/server"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    if (code) {
        const supabase = getServerClient()
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}
