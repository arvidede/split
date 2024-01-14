import getGroups from "@/app/actions/getGroups"
import CreateNewGroup from "../CreateNewGroup"
import ExpenseList from "../ExpenseList"

export default async function GroupNavigation() {
    const groups = await getGroups()

    return (
        <div>
            <CreateNewGroup />
            {groups?.map((group) => (
                <div key={group.id}>
                    <div>
                        <div>Thumbnail: {group.thumbnail_url}</div>
                        <div>{group.name}</div>
                        <div>Description: {group.description}</div>
                    </div>
                    <ExpenseList expenses={group.expenses} groupId={group.id} />
                </div>
            ))}
        </div>
    )
}
