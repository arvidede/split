"use server"

import getServerClient from "@/db/server"

export default async function signOut() {
    const supabase = getServerClient()

    await supabase.auth.signOut()

    // return redirect("/login")
}
