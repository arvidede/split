"use client"

import { Group } from "@/types"
import { ReactNode, createContext, useContext } from "react"

const GroupContext = createContext<Group>({} as Group)

interface Props {
    children: ReactNode
    group: Group
}

export default function GroupProvider({ children, group }: Props) {
    return (
        <GroupContext.Provider value={group}>{children}</GroupContext.Provider>
    )
}

export const useGroup = () => useContext(GroupContext)
