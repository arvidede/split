import GroupNavigation from "@/components/GroupNavigation"
import Header from "@/components/Header"
import Summary from "@/components/Summary"
import { getSession } from "@/db/server"
import protect from "../auth/protect"

async function Page() {
    await protect()
    const session = await getSession()
    return (
        <main>
            {JSON.stringify(session, null, 2)}
            <Header />
            <Summary />
            <GroupNavigation />
        </main>
    )
}

export default Page
