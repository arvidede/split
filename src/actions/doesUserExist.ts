"use server"

import getServerClient from "@/db/server"

export default async function doesUserExist(email: string) {
    const db = getServerClient()
    const { data, error } = await db
        .from("profiles")
        .select()
        .eq("email", email)
        .single()

    if (error) {
        console.error(error)
        return false
    }

    return Boolean(data)
}
