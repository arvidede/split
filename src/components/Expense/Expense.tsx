import deleteExpense from "@/actions/expense/deleteExpense"
import useBoolean from "@/hooks/useBoolean"
import type { Expense } from "@/types"
import dayjs from "dayjs"
import styles from "./Expense.module.scss"
interface Props {
    expense: Expense
}

export default function Expense({ expense }: Props) {
    const showDetails = useBoolean(false)
    const date = dayjs(expense.date)

    async function handleDelete() {
        await deleteExpense(expense.id)
    }

    return (
        <li
            key={expense.id}
            className={styles.container}
            onClick={showDetails.toggle}
        >
            <div className={styles.summary}>
                <div>{date.format("DD MMM")}</div>
                <div>{expense.title}</div>
                <div>
                    {expense.currency} {expense.amount}
                </div>
                <div className={styles.delete}>
                    <button onClick={handleDelete}>x</button>
                </div>
            </div>
            {showDetails.state && (
                <div className={styles.details}>
                    <pre>{JSON.stringify(expense, null, 4)}</pre>
                </div>
            )}
        </li>
    )
}
