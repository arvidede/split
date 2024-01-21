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
            members:${profiles},
            expenses (
                id,
                title,
                date,
                group_id,
                created_at,
                last_modified,
                amount,
                currency,
                author:${profiles},
                payments (
                    user:${profiles},
                    weight
                ),
                comments (
                    id,
                    text,
                    author:${profiles},
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

const profiles = `
    profiles (
        id,
        name,
        avatar_url,
        created_at,
        last_modified,
        email
    )
`
