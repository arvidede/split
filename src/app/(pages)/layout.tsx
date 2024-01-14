import GroupNavigation from "@/components/GroupNavigation"
import Header from "@/components/Header"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Split",
    description: "Split",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>
                    <aside>
                        <GroupNavigation />
                    </aside>
                    {children}
                </main>
            </body>
        </html>
    )
}
