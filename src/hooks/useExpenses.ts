import getBrowserClient from "@/db/client"
import { Expense } from "@/types"
import { useEffect, useState } from "react"

export default function useExpenses(
    initialExpenses: Expense[],
    groupId: string,
) {
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

    return {
        expenses,
        setExpenses,
        handleAddExpense,
        handleDeleteExpense,
        handleUpdateExpense,
    }
}
