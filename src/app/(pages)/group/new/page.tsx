import protect from "@/app/auth/protect"
import CreateNewGroup from "@/components/CreateNewGroup"

async function Page() {
    await protect()
    return (
        <main>
            <CreateNewGroup />
        </main>
    )
}

export default Page
