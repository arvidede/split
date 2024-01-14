import deleteExpense from "@/actions/deleteExpense"
import { Expense } from "@/types"
import dayjs from "dayjs"
import styles from "./Expense.module.scss"
interface Props {
    expense: Expense
}

export default function Expense({ expense }: Props) {
    const date = dayjs(expense.created_at)

    async function handleDelete() {
        await deleteExpense(expense.id)
    }

    return (
        <li key={expense.id} className={styles.container}>
            <div>{date.format("DD MMM")}</div>
            <div>{expense.title}</div>
            <div>
                {expense.currency} {expense.amount}
            </div>
            <div className={styles.delete}>
                <button onClick={handleDelete}>x</button>
            </div>
        </li>
    )
}
