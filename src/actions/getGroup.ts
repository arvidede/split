import getServerClient from "@/db/server"

export default async function getGroup(groupId: string) {
    const db = getServerClient()
    const { data: group, error } = await db
        .from("groups")
        .select(
            `
            id,
            name,
            description,
            created_at,
            last_modified,
            thumbnail_url,
            expenses (
                id,
                title,
                group_id,
                created_at,
                last_modified,
                amount,
                currency,
                author,
                payments (
                    user_id,
                    expense_id,
                    weight
                ),
                comments (
                    id,
                    text,
                    author_id,
                    expense_id,
                    created_at,
                    last_modified
                )
            )
        `,
        )
        .eq("id", groupId)
        .single()

    if (error) {
        console.error(error)
    }

    return group
}
