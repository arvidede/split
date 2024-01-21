"use server"

import getServerClient, { getSession } from "@/db/server"
import { redirect } from "next/navigation"

function validateGroup() {}

export default async function createGroup(groupName: string) {
    try {
        console.log(await getSession())
        console.log(groupName)
        const { data, error } = await getServerClient()
            .from("groups")
            .insert({
                name: groupName,
                description: "",
            })
            .select()
            .single()

        if (error) {
            console.error(error)
        }

        console.log(data)
        return redirect(`/group/${data?.id}`)
    } catch (e: unknown) {
        console.error(e)
        return {
            ok: false,
        }
    }
}
