import getBrowserClient from "../client"

export interface SubscriptionOptions {
    table: string
    filter: string
    onAdd: (payload: unknown) => void
    onUpdate: (payload: unknown) => void
    onDelete: (payload: unknown) => void
}

type UnSubscribe = () => void

export default function createSubscription({
    table,
    filter,
    onAdd,
    onDelete,
    onUpdate,
}: SubscriptionOptions): UnSubscribe {
    const client = getBrowserClient()

    const channel = client
        .channel("new-expense")
        .on(
            "postgres_changes",
            {
                event: "INSERT",
                schema: "public",
                table,
                filter,
            },
            onAdd,
        )
        .on(
            "postgres_changes",
            {
                event: "UPDATE",
                schema: "public",
                table,
                filter,
            },
            onUpdate,
        )
        .on(
            "postgres_changes",
            {
                event: "DELETE",
                schema: "public",
                table,
                filter,
            },
            onDelete,
        )
        .subscribe()

    return function () {
        client.removeChannel(channel)
    }
}
