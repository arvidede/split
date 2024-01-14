import { createBrowserClient } from "@supabase/ssr"
import { Database } from "./db"

const db = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export default db
