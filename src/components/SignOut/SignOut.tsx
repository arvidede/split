"use client"

import getBrowserClient from "@/db/client"
import { useRouter } from "next/navigation"

export default function SignOut() {
    const router = useRouter()

    const handleSignOut = async () => {
        const supabase = getBrowserClient()
        await supabase.auth.signOut()
        router.refresh()
    }

    return <button onClick={handleSignOut}>Logga ut</button>
}
