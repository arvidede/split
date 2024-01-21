"use client"

import { useGroup } from "@/context/Group"
import useExpenses from "@/hooks/useExpenses"
import { Expense as ExpenseType } from "@/types"
import Expense from "../Expense"
import styles from "./ExpenseList.module.scss"

interface Props {}

export default function ExpenseList({}: Props) {
    const { id: groupId, expenses: initialExpenses } = useGroup()
    const { expenses } = useExpenses(initialExpenses, groupId)

    return (
        <div className={styles.container}>
            <ul className={styles.list}>{expenses.map(createExpense)}</ul>
        </div>
    )
}

function createExpense(expense: ExpenseType) {
    return <Expense key={expense.id} expense={expense} />
}
