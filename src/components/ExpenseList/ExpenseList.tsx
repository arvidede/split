"use client"

import useExpenses from "@/hooks/useExpenses"
import type { Expense as ExpenseType } from "@/types"
import Expense from "../Expense"
import styles from "./ExpenseList.module.scss"

interface Props {
    expenses: ExpenseType[]
    groupId: string
}

export default function ExpenseList({
    expenses: initialExpenses,
    groupId,
}: Props) {
    const { expenses } = useExpenses(initialExpenses, groupId)

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {expenses.map((expense) => (
                    <Expense key={expense.id} expense={expense} />
                ))}
            </ul>
        </div>
    )
}
