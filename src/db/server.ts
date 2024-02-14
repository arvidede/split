import { Database } from "@/types/db"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

type ServerClient = Awaited<ReturnType<typeof getServerClient>>

export default function getServerClient() {
    const cookieStore = cookies()

    return createServerClient<Database>(
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

export async function getSession(client?: ServerClient) {
    const supabase = client || getServerClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return session
}

export async function getUser(client?: ServerClient) {
    const session = await getSession(client)
    return session?.user
}
