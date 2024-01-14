"use server"

import getServerClient from "@/db/server"

function validateExpense() {}

export default async function createExpense(
    groupId: string,
    formData: FormData,
) {
    const title = String(formData.get("title"))
    const currency = String(formData.get("currency"))
    const amount = Number(formData.get("amount"))

    const client = getServerClient()

    await client.from("expenses").insert({
        title,
        currency,
        amount,
        group_id: groupId,
    })

    return {
        ok: true,
    }
}
