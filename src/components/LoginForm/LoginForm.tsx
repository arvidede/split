"use client"

import signIn from "@/actions/auth/signIn"
import signUp from "@/actions/auth/signUp"
import { useCallback, useState } from "react"
import { FormButton } from "../Button/Button"
import FadeIn from "../FadeIn/FadeIn"
import TextField from "../TextField"
import Email from "./Email"
import styles from "./LoginForm.module.scss"

enum View {
    Email = "email",
    Login = "login",
    SignUp = "sign-up",
}

export default function LoginForm() {
    const [view, setView] = useState(View.Email)

    const handleExistingEmail = useCallback(() => {
        setView(View.Login)
    }, [])

    const handleNonExistingUser = useCallback(() => {
        setView(View.SignUp)
    }, [])

    return (
        <form className={styles.form}>
            <FadeIn visible delay={500}>
                <Email
                    onSuccess={handleExistingEmail}
                    onFail={handleNonExistingUser}
                />
            </FadeIn>

            <FadeIn visible={view === View.Login} className={styles.fade}>
                <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <FormButton formAction={signIn}>Sign In</FormButton>
            </FadeIn>

            <FadeIn visible={view === View.SignUp} className={styles.fade}>
                <TextField
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <TextField
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat password"
                    required
                />
                <FormButton formAction={signUp}>Sign Up</FormButton>
            </FadeIn>
        </form>
    )
}
