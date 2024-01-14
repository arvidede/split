import Summary from "@/components/Summary"
import protect from "../auth/protect"

async function Page() {
    await protect()
    return (
        <section>
            <Summary />
        </section>
    )
}

export default Page
