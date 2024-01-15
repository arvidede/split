import getGroups from "@/actions/getGroups"
import Link from "next/link"
import styles from "./GroupNavigation.module.scss"

export default async function GroupNavigation() {
    const groups = await getGroups()

    return (
        <section className={styles.container}>
            <span className={styles.groupHeader}>
                <h5>Dina grupper</h5>
                <Link href="/group/new">
                    <button>+</button>
                </Link>
            </span>
            <ul>
                {groups?.map((group) => (
                    <li key={group.id}>
                        <Link href={`/group/${group.id}`}>
                            <div>{group.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
