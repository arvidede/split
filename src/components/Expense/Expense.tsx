import { Expense } from "@/types"
import styles from "./Expense.module.scss"

interface Props {
    expense: Expense
}

export default function Expense({ expense }: Props) {
    return (
        <div key={expense.id} className={styles.container}>
            <div>{expense.created_at}</div>
            <div>{expense.title}</div>
            <div>{expense.created_at}</div>
        </div>
    )
}
