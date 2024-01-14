import getServerClient from "../db/server"

export default async function getGroups() {
    const db = getServerClient()
    const { data: groups, error } = await db.from("groups").select(`
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
    `)

    if (error) {
        console.error(error)
    }

    return groups
}
