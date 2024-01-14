"use client"

import getBrowserClient from "@/db/client"
import { useState } from "react"

export default function CreateNewGroup() {
    const [groupName, setGroupName] = useState("")
    async function handleCreateNewGroup() {
        const db = getBrowserClient()
        await db.from("groups").insert({
            name: groupName,
            description: "",
        })
    }
    return (
        <section>
            <input
                type="text"
                name=""
                id=""
                onChange={(e) => setGroupName(e.target.value)}
                value={groupName}
            />
            <button onClick={handleCreateNewGroup}>Skapa</button>
        </section>
    )
}
