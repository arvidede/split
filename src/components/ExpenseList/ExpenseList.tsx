"use client"

import getBrowserClient from "@/db/client"
import { useEffect, useState } from "react"
import AddNewExpense from "../AddNewExpense"
import Expense from "../Expense"

interface Props {
    expenses: any[]
    groupId: string
}
export default function ExpenseList({
    expenses: initialExpenses,
    groupId,
}: Props) {
    const [expenses, setExpenses] = useState(initialExpenses)

    function handleAddExpense(event: any) {
        setExpenses((current) => [...current, event.new])
    }
    function handleUpdateExpense(event: any) {
        setExpenses((current) =>
            current.map((it) => (it.id === event.new.id ? event.new : it)),
        )
    }

    function handleDeleteExpense(event: any) {
        setExpenses((current) => current.filter((it) => it.id !== event.old.id))
    }

    useEffect(() => {
        const client = getBrowserClient()
        const channel = client
            .channel("new-expense")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "expenses",
                    filter: `group_id=eq.${groupId}`,
                },
                handleAddExpense,
            )
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "expenses",
                    filter: `group_id=eq.${groupId}`,
                },
                handleUpdateExpense,
            )
            .on(
                "postgres_changes",
                {
                    event: "DELETE",
                    schema: "public",
                    table: "expenses",
                    filter: `group_id=eq.${groupId}`,
                },
                handleDeleteExpense,
            )
            .subscribe()

        return () => {
            client.removeChannel(channel)
        }
    }, [groupId])

    return (
        <div>
            <h3>Expenses</h3>
            <AddNewExpense groupId={groupId} />
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </div>
    )
}
