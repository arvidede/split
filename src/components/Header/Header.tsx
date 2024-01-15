"use client"
import { User } from "@supabase/supabase-js"
import SignOut from "../SignOut"

interface Props {
    session: User | undefined
}

export default function Header({ session }: Props) {
    return <header>{session && <SignOut />}</header>
}
