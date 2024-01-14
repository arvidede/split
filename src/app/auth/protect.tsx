import { getSession } from "@/db/server"
import { redirect } from "next/navigation"

export default async function protect() {
    if (!(await getSession())) {
        return redirect("/login")
    }
}
