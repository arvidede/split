import getGroup from "@/actions/group/getGroup"
import protect from "@/app/auth/protect"
import AddNewExpense from "@/components/AddNewExpense"
import ExpenseList from "@/components/ExpenseList"
import GroupProvider from "@/context/Group"
import { redirect } from "next/navigation"
import styles from "./groupId.module.scss"

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
        <GroupProvider group={group}>
            <section className={styles.container}>
                <div className={styles.header}>
                    <h3>{group.name}</h3>
                    <AddNewExpense />
                </div>
                <ExpenseList />
            </section>
        </GroupProvider>
    )
}

export default Page
