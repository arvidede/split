"use client"
import doesUserExist from "@/actions/doesUserExist"
import TextField from "@/components/TextField"
import useDebouncedInput from "@/hooks/useDebouncedInput"
import { ReactNode, useCallback, useEffect, useState } from "react"
import styles from "./login.module.scss"

enum View {
    Email = "email",
    Login = "login",
    SignUp = "sign-up",
}

function FadeIn({
    children,
    visible,
    className,
}: {
    children?: ReactNode
    visible?: boolean
    className?: string
}) {
    useEffect(() => {}, [visible])
    if (!visible) return null

    return <div className={className}>{children}</div>
}

interface Props {
    onSuccess: () => void
    onFail: () => void
}

function Email({ onSuccess, onFail }: Props) {
    const [input, setInput] = useState("")
    const debouncedInput = useDebouncedInput(input, 1000)

    useEffect(() => {
        if (debouncedInput) {
            doesUserExist(debouncedInput).then((exists) => {
                if (exists) {
                    onSuccess()
                } else {
                    onFail()
                }
            })
        }
    }, [debouncedInput, onSuccess, onFail])

    return (
        <TextField
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
    )
}

export default function Login() {
    const [view, setView] = useState(View.Email)

    const handleExistingEmail = useCallback(function () {
        setView(View.Login)
    }, [])

    const handleNonExistingUser = useCallback(function () {
        setView(View.SignUp)
    }, [])

    return (
        <section className={styles.container}>
            <form method="post" className={styles.form}>
                <Email
                    onSuccess={handleExistingEmail}
                    onFail={handleNonExistingUser}
                />

                <FadeIn visible={view === View.Login} className={styles.fade}>
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button formAction="/auth/login">Sign In</button>
                </FadeIn>

                <FadeIn visible={view === View.SignUp}>
                    <label htmlFor="name">Name</label>
                    <TextField type="text" name="name" />
                    <button formAction="/auth/sign-up">Sign Up</button>
                </FadeIn>
            </form>
        </section>
    )
}
