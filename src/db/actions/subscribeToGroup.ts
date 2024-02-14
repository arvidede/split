import createSubscription, { SubscriptionOptions } from "./createSubscription"

interface GroupSubscriptionOptions
    extends Omit<SubscriptionOptions, "filter" | "table"> {
    groupId: string
}

export default function subscribeToGroup({
    groupId,
    ...options
}: GroupSubscriptionOptions) {
    return createSubscription({
        ...options,
        table: "expenses",
        filter: `group_id=eq.${groupId}`,
    })
}
