import { createBrowserClient } from "@supabase/ssr"
import { Database } from "./db"

let client: ReturnType<typeof createBrowserClient<Database>>

export default function getBrowserClient() {
    if (!client) {
        client = createBrowserClient<Database>(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        )
    }
    return client
}
