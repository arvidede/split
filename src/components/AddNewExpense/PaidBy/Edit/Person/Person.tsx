"use client"
import { Avatar } from "@/components/Avatar"
import { Profile } from "@/types"
import styles from "./Person.module.scss"

interface Props {
    user: Profile
}

export default function Person({ user }: Props) {
    return (
        <div className={styles.person}>
            <Avatar src={user.avatar_url!} />
            <span>{user.name}</span>
        </div>
    )
}
