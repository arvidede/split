import getServerClient from "@/db/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()

    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    const name = String(formData.get("name"))

    const supabase = getServerClient()

    await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: `${requestUrl.origin}/auth/callback`,
            data: {
                name,
            },
        },
    })

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    })
}
