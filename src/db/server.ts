import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export default function getServerClient() {
    const cookieStore = cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    cookieStore.set({ name, value, ...options })
                },
                remove(name: string, options: CookieOptions) {
                    cookieStore.set({ name, value: "", ...options })
                },
            },
        },
    )
}

export async function getSession() {
    const supabase = getServerClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return session
}