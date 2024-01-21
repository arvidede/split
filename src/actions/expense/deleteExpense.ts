"use server"

import getServerClient from "@/db/server"

export default async function deleteExpense(expenseId: string) {
    try {
        await getServerClient().from("expenses").delete().eq("id", expenseId)
        return {
            ok: true,
        }
    } catch {
        return {
            ok: false,
        }
    }
}
