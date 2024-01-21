"use client"

import createGroup from "@/actions/group/createGroup"
import { useState } from "react"

export default function CreateNewGroup() {
    const [groupName, setGroupName] = useState("")

    async function handleCreateNewGroup() {
        createGroup(groupName)
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
