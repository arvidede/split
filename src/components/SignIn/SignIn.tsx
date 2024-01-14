"use client"

import getBrowserClient from "@/db/client"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function SignIn() {
    const [input, setInput] = useState({
        email: "",
        password: Math.random().toString(),
        name: "",
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput((current) => ({
            ...current,
            [e.target.name]: e.target.value,
        }))
    }

    const router = useRouter()

    const handleSignIn = async () => {
        const supabase = getBrowserClient()
        await supabase.auth.signInWithPassword({
            email: input.email,
            password: input.password,
        })
        router.refresh()
    }

    async function handleCreateUser() {
        const supabase = getBrowserClient()
        await supabase.auth.signUp({
            email: input.email,
            password: input.password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
                data: {
                    name: input.name,
                },
            },
        })
        router.refresh()
    }

    return (
        <form>
            <input
                type="email"
                value={input.email}
                onChange={handleChange}
                name="email"
            />
            <input
                type="password"
                value={input.password}
                onChange={handleChange}
                name="password"
            />
            <input
                type="text"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <button onClick={handleCreateUser}>Skapa</button>
            <button onClick={handleSignIn}>Logga in</button>
        </form>
    )
}
