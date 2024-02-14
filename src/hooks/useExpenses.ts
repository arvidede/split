import subscribeToGroup from "@/db/actions/subscribeToGroup"
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
        return subscribeToGroup({
            groupId,
            onAdd: handleAddExpense,
            onUpdate: handleUpdateExpense,
            onDelete: handleDeleteExpense,
        })
    }, [groupId])

    return {
        expenses,
        setExpenses,
        handleAddExpense,
        handleDeleteExpense,
        handleUpdateExpense,
    }
}
