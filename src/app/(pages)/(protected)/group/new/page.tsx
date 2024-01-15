import protect from "@/app/auth/protect"
import CreateNewGroup from "@/components/CreateNewGroup"
import styles from "./new.module.scss"

async function Page() {
    await protect()
    return (
        <section className={styles.container}>
            <CreateNewGroup />
        </section>
    )
}

export default Page
