import getGroup from "@/actions/getGroup"
import protect from "@/app/auth/protect"
import AddNewExpense from "@/components/AddNewExpense"
import ExpenseList from "@/components/ExpenseList"
import { redirect } from "next/navigation"
import styles from "./page.module.scss"

interface Props {
    params: {
        groupId: string
    }
}
async function Page({ params }: Props) {
    await protect()
    const group = await getGroup(params.groupId)

    if (!group) {
        return redirect("/")
    }
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                {group.name}
                <AddNewExpense groupId={group.id} />
            </div>
            <ExpenseList expenses={group.expenses} groupId={group.id} />
        </section>
    )
}

export default Page
