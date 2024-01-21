"use client"

import type { User } from "@/types"
import SignOut from "../SignOut"
import styles from "./Header.module.scss"

interface Props {
    session: User | undefined
}

export default function Header({ session }: Props) {
    return <header className={styles.header}>{session && <SignOut />}</header>
}
