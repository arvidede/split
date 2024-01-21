"use client"

import getBrowserClient from "@/db/client"
import { useRouter } from "next/navigation"
import Button from "../Button"

export default function SignOut() {
    const router = useRouter()

    const handleSignOut = async () => {
        const supabase = getBrowserClient()
        await supabase.auth.signOut()
        router.refresh()
    }

    return <Button onClick={handleSignOut}>Logga ut</Button>
}
