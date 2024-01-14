import SignOut from "@/components/SignOut"
import { getSession } from "@/db/server"
import protect from "./auth/protect"

async function Page() {
    await protect()
    const session = await getSession()
    return (
        <main>
            {JSON.stringify(session, null, 2)}
            <SignOut />
        </main>
    )
}

export default Page
