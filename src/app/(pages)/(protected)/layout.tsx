import protect from "@/app/auth/protect"
import GroupNavigation from "@/components/GroupNavigation"

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    await protect()
    return (
        <>
            <aside>
                <GroupNavigation />
            </aside>
            {children}
        </>
    )
}
