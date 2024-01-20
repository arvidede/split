import LoginForm from "@/components/LoginForm"
import { getSession } from "@/db/server"
import { redirect } from "next/navigation"
import styles from "./login.module.scss"

export default async function Login() {
    const session = await getSession()
    if (session) {
        return redirect("/")
    }
    return (
        <section className={styles.container}>
            <LoginForm />
        </section>
    )
}
