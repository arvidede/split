"use client"

import type { Session } from "@/types"
import SignOut from "../SignOut"
import styles from "./Header.module.scss"

interface Props {
    session: Session | null
}

export default function Header({ session }: Props) {
    return <header className={styles.header}>{session && <SignOut />}</header>
}
